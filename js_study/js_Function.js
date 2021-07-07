const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));
// expected output: 8

console.log(sum)

function naame(a, b) {
    return a + b

}
console.log(naame(3, 8))

function doSomething() { }
console.log(doSomething.name)  // "doSomething"

console.log(doSomething)

console.log(this)

var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true

var reg = /a/;
Object.getPrototypeOf(reg) === RegExp.prototype; // true

console.log(Object.prototype)
console.log(proto)
console.log(Object.getPrototypeOf(obj))


