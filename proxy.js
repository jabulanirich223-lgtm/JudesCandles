// proxy.js — Run: node proxy.js
// Forwards requests to Robinhood's PUBLIC endpoints (no auth needed)
const http = require('http');
const https = require('https');
const PORT = 3001;

const ALLOWED = ['api.robinhood.com','api.binance.com','api1.binance.com'];

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','*');
  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  let body = '';
  req.on('data', c => body += c);
  req.on('end', () => {
    const u = new URL(req.url, `http://localhost:${PORT}`);
    const target = u.searchParams.get('url');
    if (!target) { res.writeHead(400); res.end('{"error":"?url= required"}'); return; }

    let parsed;
    try { parsed = new URL(target); } catch(e) { res.writeHead(400); res.end('{"error":"bad url"}'); return; }
    if (!ALLOWED.includes(parsed.hostname)) { res.writeHead(403); res.end('{"error":"host not allowed"}'); return; }

    const opts = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: req.method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Robinhood/823 (iPhone; iOS 16.0; Scale/3.0)',
        'X-Robinhood-API-Version': '1.431.4'
      }
    };
    // Forward any auth header
    if (req.headers['authorization']) opts.headers['Authorization'] = req.headers['authorization'];

    const pr = https.request(opts, r2 => {
      let d = '';
      r2.on('data', c => d += c);
      r2.on('end', () => {
        res.writeHead(r2.statusCode, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'X-RH-Status': r2.statusCode
        });
        res.end(d);
      });
    });
    pr.on('error', e => { res.writeHead(502); res.end(JSON.stringify({error:e.message})); });
    pr.setTimeout(15000, () => { pr.destroy(); res.writeHead(504); res.end('{"error":"timeout"}'); });
    if (body) pr.write(body);
    pr.end();
  });
}).listen(PORT, () => {
  console.log('');
  console.log('  ╔═══════════════════════════════════════════╗');
  console.log('  ║   APEX ULTRA — Robinhood Public Proxy     ║');
  console.log('  ║   Port: ' + PORT + '                              ║');
  console.log('  ║   No login required — public market data  ║');
  console.log('  ╚═══════════════════════════════════════════╝');
  console.log('');
  console.log('  Open index.html in your browser.');
  console.log('  Robinhood crypto data will stream automatically.');
  console.log('');
});
