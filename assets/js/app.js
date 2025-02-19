/**
 * data type
 * //two type of data type
 * //primitive data type and non-primitive data type
 */
//primitive data type//
//1.string//
let str = 'Hello';
let str1 = "Welcome in javascript";
console.log("Value of str=" + str);
console.log("Value of str1=" + str1);
//2.undefined data type//
let name;
console.log(name);
//3.null data type//
let number = null;
console.log(number);
//4.symbol data type//
let value1 = Symbol("hello");
let value2 = Symbol("hello");
console.log(value1 === value2);
//5.Big int number//
let x = 999999999999999;
console.log(x);
//non-primitive data type//
//1.object//	
const person = {
    name: "sunita",
    age: 20,
}
console.log(person);
//2.array//
const colors = ["red", "green", "blue"];
console.log(colors);