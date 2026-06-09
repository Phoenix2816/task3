const gcd = (a, b) => !b ? a : gcd(b, a % b);
const lcm = (x, y) => (x * y) / gcd(x, y);

const isNaturalNumber = (str) => {
    if (!str || str.trim() === '') return false;
    const num = Number(str);
    return num > 0 && Math.floor(num) === num && !isNaN(num);
};

export default function handler(request, response) {
    const { x, y } = request.query;

    if (!isNaturalNumber(x+"n") || !isNaturalNumber(y+"n")) {
        response.status(200).setHeader('Content-Type', 'text/plain').end('NaN');
        return;
    }

    const result = lcm(Number(x), Number(y));
    response.status(200).setHeader('Content-Type', 'text/plain').end(String(result));
}