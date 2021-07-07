// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
function haha(t) {
    console.log(t.name, t.age);
}
haha({ name: "ddd", age: 13 });
var Point = /** @class */ (function () {
    function Point() { }
    return Point
}());

let P = function P() { };
P.x = 1
P.y = 2


// P.disp() = () => { conslog.log("P.disp():", P.x, P.y) }

// let function  xx() = () => { conslog.log("xxxx:") }

// xx();


console.log(P.x, P.y)
var pt = new Point();
pt.x = 0;
pt.y = 0;

let pp = new P();

pp.a = 3
pp.b = 4

console.log(Point)
console.log(pt)

console.log("P:", P)
console.log("pp:", pp)
console.log(pp.x, pp.y)

function haveES6DuplicatePropertySemantics() {
    // "use strict";
    try {
        ({ prop: 1, prop: 2 });
        let mm = { k: 1, k: 5 }
        console.log('mm:', mm.k)

        // No error thrown, duplicate property names allowed in strict mode
        return true;
    } catch (e) {
        // Error thrown, duplicates prohibited in strict mode
        return false;
    }
}


var a = 'foo', b = 42, c = { xy: "xxx" };
var o = { a, b, c };
let o2 = { a, b }
let o3 = { b, c }
let o4 = { a }
let oo4 = { a }
let o5 = { a: a }
console.log('?', o4 === oo4)   //false
console.log('?', o4 == oo4)   //false
console.log('??', o4.a === oo4.a)    //true
console.log('??', o4.a == oo4.a)     //true

let o6 = o4   // js对象浅拷贝

console.log('o4', o4)  // {a: "foo"}
console.log('o5', o5)  // {a: "foo"}

console.log(o4 === o5)  //false
console.log(o4 == o5)  //false
console.log('xxx', o4 = o5) // {{a: "foo"}}   js对象浅拷贝
console.log(o4 === o5)  //true
console.log(o4 == o5)  //true


console.log(o4)
o4.a = 'eeeeeeeeeeeeee'
console.log('o4:', o4) // {a: "eeeeeeeeeeeeee"}
console.log('o5:', o5) // {a: "eeeeeeeeeeeeee"}
console.log('o6:', o6) // {a: "foo"}

o4.b = 1000000
console.log('o4:', o4) // {a: "eeeeeeeeeeeeee", b: 1000000}
console.log('o5:', o5) // {a: "eeeeeeeeeeeeee", b: 1000000}


let t001 = new Object([a, b, c])
console.log('t001:', t001)

let t002 = new Object({ a, b, c })
console.log('t002:', t002)






