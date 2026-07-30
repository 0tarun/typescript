function divition(a, b) {
    // const quotient = Math.floor(a/b);
    // const remainder = a%b;
    // return [quotient, remainder];
    return [Math.floor(a / b), a % b];
}
console.log(divition(10, 3));
export {};
