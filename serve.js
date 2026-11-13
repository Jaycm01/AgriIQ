const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3456;
const OUT_DIR = path.join(__dirname, 'out');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.txt': 'text/x-component; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

const server = http.createServer((req, res) => {
  const isRSC = req.headers['rsc'] === '1' || req.url.includes('_rsc=');
  let reqPath = decodeURI(req.url.split('?')[0]);

  if (reqPath === '/') {
    reqPath = isRSC ? '/index.txt' : '/index.html';
  }

  let filePath = path.join(OUT_DIR, reqPath);

  // If path is a directory
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    if (isRSC && fs.existsSync(path.join(filePath, 'index.txt'))) {
      filePath = path.join(filePath, 'index.txt');
    } else {
      filePath = path.join(filePath, 'index.html');
    }
  } else if (!fs.existsSync(filePath) && !path.extname(filePath)) {
    if (isRSC && fs.existsSync(filePath + '/index.txt')) {
      filePath = filePath + '/index.txt';
    } else if (fs.existsSync(filePath + '/index.html')) {
      filePath = filePath + '/index.html';
    } else if (fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    }
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    // 404 fallback
    const notFound = path.join(OUT_DIR, '404.html');
    if (fs.existsSync(notFound)) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(notFound).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Agri IQ Static Server running at http://localhost:${PORT}`);
});
