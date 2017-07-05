let add = (function () {
    let sum = 0;

    return function sumNumbers(num) {
        sum += num;
        sumNumbers.toString = () => sum;
        return sumNumbers;
    }
})();

console.log(add(1)(6)(-3).toString());