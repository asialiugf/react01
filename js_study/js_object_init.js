



let obj = {};
var o1 = new Object();
var o2 = new Object(undefined);
var o3 = new Object(null);

console.log('obj:', obj)
console.log('o1:', o1)
console.log('o2:', o2)
console.log('o3:', o3)

console.log('1111111111111111111111111111111111111')
function ha() { }
const ha1 = () => { }

let o4 = new Object(1)
let o5 = new Object('foo')
let o6 = new Object(true)
let o7 = new Object(ha)
let o8 = new Object(ha1)

console.log('o4:', o4)
console.log('o5:', o5)
console.log('o6:', o6)
console.log('o7:', o7)
console.log('o8:', o8)

console.log('22222222222222222222222222222222222222')

obj.a = 'foo';
obj.b = 45;

let obj1 = new Object(obj); // 相当于 let obj1 = obj ; 指向同一个对象

console.log('obj:', obj)
console.log('obj1:', obj1)

obj.a = 'bar'
obj1.b = 100

console.log('obj:', obj)
console.log('obj1:', obj1)

obj1.c = 'hhhhhhhhh'

console.log('obj:', obj)
console.log('obj1:', obj1)

let obj2 = obj1
obj2.d = '5555'
console.log('ttttttttttttttttttttttt:',obj1 === obj2) // true
console.log('obj:', obj)
console.log('obj1:', obj1)
console.log('obj2:', obj2)


console.log('3333333333333333333333333333333333333')
let obj3 = Object.create(obj)  // 以obj为原型对象，创建一个新的空对象

console.log('obj:', obj)
console.log('obj1:', obj1)
console.log('obj2:', obj2)
console.log('after create,obj3:', obj3)
console.log(obj3.d)
console.log(obj3.e)


// after create,obj3: {}d: "88888"e: "hello"__proto__: Object
// 5555
// undefined

obj3.d = '88888'
obj3.e = 'hello'

console.log('----------------------------------------------')
console.log(obj3.d)
console.log(obj3.__proto__.d)


console.log('obj:', obj)
console.log('obj1:', obj1)
console.log('obj2:', obj2)
console.log('obj3:', obj3)



console.log(obj3.a)
console.log(obj3.b)
console.log(obj3.c)
console.log(obj3.d)
console.log(obj3.e)


// obj3:
// {d: "88888", e: "hello"}
// d: "88888"
// e: "hello"
// __proto__:
// a: "bar"
// b: 100
// c: "hhhhhhhhh"
// d: "5555"
// __proto__: Object

obj1.d= 'kkkkkk'

console.log('obj:', obj)
console.log('obj1:', obj1)
console.log('obj2:', obj2)
console.log('obj3:', obj3)

// obj,obj1,obj2 都是同一个对象
// {a: "bar", b: 100, c: "hhhhhhhhh", d: "5555"}
// a: "bar"
// b: 100
// c: "hhhhhhhhh"
// d: "5555"
// __proto__: Object

// obj3 的原形对象是 obj, 如果obj发生变化，obj3的原型对象也会发生变化。
// {d: "88888", e: "hello"}
// d: "88888"
// e: "hello"
// __proto__:
// a: "bar"
// b: 100
// c: "hhhhhhhhh"
// d: "kkkkkk"  这里由以前的 '5555' 变成了 'kkkkkk'
// __proto__: Object

let obj4 = Object.assign({},obj2) // 复制一个新的对象
let obj5 = {}
Object.assign(obj5,obj1)  // 复制一个对的对象

console.log('obj4',obj4)
console.log('obj5',obj5)
// obj4 {a: "bar", b: 100, c: "hhhhhhhhh", d: "kkkkkk"}
// obj5 {a: "bar", b: 100, c: "hhhhhhhhh", d: "kkkkkk"}

obj4.a = 'ch'
console.log('obj4',obj4)
console.log('obj5',obj5)
// obj4 {a: "ch", b: 100, c: "hhhhhhhhh", d: "kkkkkk"}
// obj5 {a: "bar", b: 100, c: "hhhhhhhhh", d: "kkkkkk"}

obj5.a = 'obj5'
console.log('obj4',obj4)
console.log('obj5',obj5)
// obj4 {a: "ch", b: 100, c: "hhhhhhhhh", d: "kkkkkk"}
// obj5 {a: "obj5", b: 100, c: "hhhhhhhhh", d: "kkkkkk"}


let obj6 = Object.assign({},obj3)  // 复制 obj3，但不复制obj3的原型
console.log(obj6)


let obj_a = {name:"qiankaobei",other:{age:"123",height:"321"}};
let obj_b = Object.assign({},obj_a); // // 复制obj_a的第一层，里面的对象不复制
console.log(obj_a);//{ name: 'qiankaobei', other: { age: '999', height: '321' } }
console.log(obj_b);//{ name: 'qiankaobei', other: { age: '999', height: '321' } }
console.log('a age',obj_a.other.age) // 123
console.log('b age',obj_b.other.age) // 123
 
obj_b.name = 'yiceng';
obj_a.other.age = '999';
console.log(obj_a);//{ name: 'qiankaobei', other: { age: '999', height: '321' } }
console.log(obj_b);//{ name: 'yiceng', other: { age: '999', height: '321' } }
console.log('a age',obj_a.other.age) // 999
console.log('b age',obj_b.other.age) // 999


let ccc = Object.assign({},obj_a.other)
obj_b.other = ccc 

console.log(obj_a.other)
console.log(obj_b.other)
obj_a.other.age = '999';
obj_b.other.age = '111111999';
console.log(obj_a.other)
console.log(obj_b.other)

