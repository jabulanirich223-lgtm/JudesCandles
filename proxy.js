// Save as proxy.js, run with: node proxy.js
const http = require('http');
const https = require('https');

const PORT = 3001;

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') { res.writeHead(200); res.end(); return; }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    // Extract target URL from query param
    const url = new URL(req.url, `http://localhost:${PORT}`);
    const target = url.searchParams.get('url');
    if (!target || !target.startsWith('https://api.robinhood.com')) {
      res.writeHead(400);
      res.end(JSON.stringify({error:'Only api.robinhood.com allowed'}));
      return;
    }

    const parsed = new URL(target);
    const options = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Robinhood/823 (iPhone; iOS 16.0; Scale/3.0)',
        'X-Robinhood-API-Version': '1.431.4'
      }
    };

    // Forward auth header
    if (req.headers.authorization) options.headers['Authorization'] = req.headers.authorization;

    const proxyReq = https.request(options, proxyRes => {
      res.writeHead(proxyRes.statusCode, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      proxyRes.pipe(res);
    });

    proxyReq.on('error', e => {
      res.writeHead(502);
      res.end(JSON.stringify({error: e.message}));
    });

    if (body) proxyReq.write(body);
    proxyReq.end();
  });
}).listen(PORT, () => console.log(`RH Proxy running on http://localhost:${PORT}`));
