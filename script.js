const http = require('http');
const url = require('url');

function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}

function lcm(x, y) {
    return (x * y) / gcd(x, y);
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    
    res.setHeader('Content-Type', 'text/plain');
    
    if (pathname === '/kirlilog_yandex_ru') {
        
        res.end(String(Number.isInteger(Number(query.x)) && Number.isInteger(Number(query.y)) ? lcm(a, b) : NaN));
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});
