function triangular(n: number): number{
    return n < 0 ? 0: n * (n + 1) / 2
}

console.log(triangular(5))