// proxy.js — handles CORS + HMAC signing for exchange APIs
// Run: node proxy.js
const http = require('http');
const https = require('https');
const crypto = require('crypto');
const PORT = 3001;

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-API-Key,X-API-Secret,X-Exchange');
  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  let body = '';
  req.on('data', c => body += c);
  req.on('end', () => {
    const url = new URL(req.url, `http://localhost:${PORT}`);
    const exchange = req.headers['x-exchange'] || 'coinbase';
    const apiKey = req.headers['x-api-key'] || '';
    const apiSecret = req.headers['x-api-secret'] || '';
    const path = url.pathname + url.search;

    if (exchange === 'coinbase') {
      // Coinbase Advanced Trade API
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const message = timestamp + req.method + path + (body || '');
      const signature = crypto.createHmac('sha256', apiSecret).update(message).digest('hex');
      
      const options = {
        hostname: 'api.coinbase.com',
        path: path,
        method: req.method,
        headers: {
          'Content-Type': 'application/json',
          'CB-ACCESS-KEY': apiKey,
          'CB-ACCESS-SIGN': signature,
          'CB-ACCESS-TIMESTAMP': timestamp,
          'CB-VERSION': '2024-01-01'
        }
      };
      
      const proxyReq = https.request(options, proxyRes => {
        let data = '';
        proxyRes.on('data', c => data += c);
        proxyRes.on('end', () => {
          res.writeHead(proxyRes.statusCode, {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});
          res.end(data);
        });
      });
      proxyReq.on('error', e => { res.writeHead(502); res.end(JSON.stringify({error:e.message})); });
      if (body) proxyReq.write(body);
      proxyReq.end();

    } else if (exchange === 'binance') {
      // Binance API with HMAC
      const timestamp = Date.now();
      let queryString = url.search ? url.search.slice(1) + '&timestamp=' + timestamp : 'timestamp=' + timestamp;
      const signature = crypto.createHmac('sha256', apiSecret).update(queryString).digest('hex');
      queryString += '&signature=' + signature;
      
      const options = {
        hostname: 'api.binance.com',
        path: url.pathname + '?' + queryString,
        method: req.method,
        headers: {
          'Content-Type': 'application/json',
          'X-MBX-APIKEY': apiKey
        }
      };
      
      const proxyReq = https.request(options, proxyRes => {
        let data = '';
        proxyRes.on('data', c => data += c);
        proxyRes.on('end', () => {
          res.writeHead(proxyRes.statusCode, {'Content-Type':'application/json','Access-Control-Allow-Origin':'*'});
          res.end(data);
        });
      });
      proxyReq.on('error', e => { res.writeHead(502); res.end(JSON.stringify({error:e.message})); });
      if (body) proxyReq.write(body);
      proxyReq.end();
    } else {
      res.writeHead(400);
      res.end(JSON.stringify({error:'Unknown exchange: ' + exchange}));
    }
  });
}).listen(PORT, () => {
  console.log(`\n  ╔══════════════════════════════════════╗`);
  console.log(`  ║  APEX ULTRA Proxy — port ${PORT}        ║`);
  console.log(`  ║  Supports: Coinbase, Binance         ║`);
  console.log(`  ║  Keys never leave localhost           ║`);
  console.log(`  ╚══════════════════════════════════════╝\n`);
});
