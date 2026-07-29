function divided(a: number, b: number) : number{
    if (a==0) throw new Error("a cannot be zero");
    return a/b;
}

console.log(divided(10,2));
console.log(divided(4,3).toFixed(2));

const result = divided(10,0).toFixed(2);