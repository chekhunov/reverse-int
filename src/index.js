module.exports = function reverse(n) {
    if (n < 0) {
        return String(n).substr(1).split("").reverse().join("");
    }
    return String(n).split("").reverse().join("");
};