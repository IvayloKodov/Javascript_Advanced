let solution = (function () {
    return {
        add: (a, b) => [a[0] + b[0], a[1] + b[1]],
        multiply: (a, b) => [a[0] * b, a[1] * b],
        length: (arr) => Math.sqrt(Math.pow(arr[0], 2) + Math.pow(arr[1], 2)),
        dot: (a, b) => a[0] * b[0]+ a[1] * b[1],
        cross: (a, b) => a[0] * b[1]- [a[1] * b[0]]
    }
})();

console.log(solution.add([1, 1], [1, 0]));
console.log(solution.multiply([3.5, -2], 2));;
console.log(solution.length([3, -4]));;
console.log(solution.dot([1, 0], [0, -1]));;
console.log(solution.cross([3, 7], [1, 0]));;