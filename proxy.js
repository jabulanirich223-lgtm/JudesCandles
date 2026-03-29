const http = require('http');
const https = require('https');
const crypto = require('crypto');
const PORT = 3001;

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }
  let body = '';
  req.on('data', c => body += c);
  req.on('end', () => {
    const u = new URL(req.url, 'http://localhost:' + PORT);
    const target = u.searchParams.get('url');
    if (!target) { res.writeHead(200, {'Content-Type':'application/json'}); res.end('{"status":"proxy running"}'); return; }
    let parsed;
    try { parsed = new URL(target); } catch(e) { res.writeHead(400); res.end('{"error":"bad url"}'); return; }
    const allowed = ['trading.robinhood.com','api.robinhood.com','api.binance.com','api1.binance.com'];
    if (!allowed.includes(parsed.hostname)) { res.writeHead(403); res.end('{"error":"blocked host"}'); return; }

    // Forward headers from client
    const fwdHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'User-Agent': 'ApexUltra/1.0'
    };
    // Pass through any x-api-key, authorization, or RH-specific headers
    Object.keys(req.headers).forEach(h => {
      const hl = h.toLowerCase();
      if (hl.startsWith('x-') || hl === 'authorization' || hl.startsWith('rh-')) {
        fwdHeaders[h] = req.headers[h];
      }
    });

    const opts = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: req.method,
      headers: fwdHeaders,
      timeout: 15000
    };

    const pr = https.request(opts, r2 => {
      let d = '';
      r2.on('data', c => d += c);
      r2.on('end', () => {
        res.writeHead(r2.statusCode, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(d);
      });
    });
    pr.on('error', e => { res.writeHead(502); res.end(JSON.stringify({error: e.message})); });
    pr.on('timeout', () => { pr.destroy(); res.writeHead(504); res.end('{"error":"timeout"}'); });
    if (body) pr.write(body);
    pr.end();
  });
}).listen(PORT, () => {
  console.log('');
  console.log('  APEX ULTRA Proxy running on port ' + PORT);
  console.log('  Open index.html in your browser');
  console.log('');
});
