type DivitionResult = [number, number];
function divition(a: number, b: number) :DivitionResult {
// const quotient = Math.floor(a/b);
// const remainder = a%b;
// return [quotient, remainder];

return [Math.floor(a/b), a%b];
}

console.log(divition(10, 3));