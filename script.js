// write your code here
function decimalToBinary(num) {
    let res = [];
    while (num > 0) {
        res.push(num % 2);
        num = Math.floor(num / 2);
    }
    return res.reverse().join('');
}