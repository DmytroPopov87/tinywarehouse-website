import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../out/', import.meta.url));
const headers = await readFile(path.join(root, '_headers'), 'utf8').catch(() => {
  throw new Error('Run npm run build before npm start.');
});
const security = Object.fromEntries(headers.split('\n').slice(1).filter(line => line.startsWith('  ') && !line.includes('Cache-Control')).map(line => {
  const i = line.indexOf(':');
  return [line.slice(0, i).trim(), line.slice(i + 1).trim()];
}));
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.txt': 'text/plain', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.woff2': 'font/woff2' };
http.createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return; }
  try {
    const url = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    let file = path.resolve(root, '.' + url);
    const relative = path.relative(root, file);
    if (relative.startsWith('..') || path.isAbsolute(relative) || url.includes('\\') || url.includes('\0')) throw new Error('Invalid path');
    if (url.endsWith('/')) file = path.join(file, 'index.html');
    else if (!path.extname(file)) file += '.html';
    if (!(await stat(file)).isFile()) throw new Error('Not a file');
    const body = await readFile(file);
    res.writeHead(200, { ...security, 'Content-Type': mime[path.extname(file)] || 'application/octet-stream', 'Content-Length': body.length });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch {
    res.writeHead(404, { ...security, 'Content-Type': 'text/html; charset=utf-8' });
    res.end(req.method === 'HEAD' ? undefined : await readFile(path.join(root, '404.html')).catch(() => 'Not found'));
  }
}).listen(4173, '127.0.0.1', () => console.log('Static preview: http://127.0.0.1:4173'));
