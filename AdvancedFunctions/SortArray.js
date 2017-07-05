function solve(arr, sort) {
    return arr.sort(sort == 'asc' ? (a, b) => a - b : (a, b) => b - a);
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));;