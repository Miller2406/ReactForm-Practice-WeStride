// Binding
let a: number = 10;
a = 20;
console.log(a);

// functions
function fn(a: number, b: number): number {
    return a + b;
};
console.log(fn(1, 2))

// generic 
function fn2<A, B>(x: A, y: B) {
    return [x, y];
};
console.log(fn2<number, string>(5, '2'))