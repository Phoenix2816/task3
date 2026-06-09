const http = require('http');

const gcd = (a, b) => !b ? a : gcd(b, a % b);
const lcm = (x, y) => (x * y) / gcd(x, y);

const isNaturalNumber = (str) => {
    if (!str || str.trim() === '') return false;
    const num = Number(str);
    return num > 0 && Math.floor(num) === num && !isNaN(num);
};

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    
    if (url.pathname === '/kirlilog_yandex_ru') {
        const { x, y } = url.searchParams;
        
        res.setHeader('Content-Type', 'text/plain');
        
        if (!isNaturalNumber(x) || !isNaturalNumber(y)) {
            res.end('NaN');
        } else {
            res.end(String(lcm(Number(x), Number(y))));
        }
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});