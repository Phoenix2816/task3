const gcd = (a, b) => {
    return b === 0n ? a : gcd(b, a % b);
};

const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
};

const isNaturalNumber = (str) => {
    if (!str || str.trim() === '') return false;
    const num = Number(str);
    return num > 0 && Math.floor(num) === num && !isNaN(num);
};

export default function handler(req, res) {

    const { x, y } = req.query;

    const isNaturalNumber = (str) => {
        if (typeof str !== "string") return false;

        return /^[1-9]\d*$/.test(str);
    };

    if (!isNaturalNumber(x) || !isNaturalNumber(y)) {
        res.setHeader("Content-Type", "text/plain");
        return res.status(200).send("NaN");
    }

    const gcd = (a, b) =>
        b === 0n ? a : gcd(b, a % b);

    const lcm = (a, b) =>
        (a * b) / gcd(a, b);

    const result = lcm(
        BigInt(x),
        BigInt(y)
    );

    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send(result.toString());
}
