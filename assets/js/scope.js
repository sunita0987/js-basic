//scope//
/**
 * three type of scope 
 * 1.function scope
 * 2.global scope
 * 3.block scope
 */
//1.Global scope//
let globalVar = "welcome in javascript"; 
function showGlobal() {
    console.log(globalVar);
}
showGlobal();
console.log(globalVar);

//2.function scope//
// let localVar ="welcome in javascrpit"; 
function myFunction() {
    let localVar ="welcome in javascrpit"; 
    console.log(localVar); 
}
myFunction();
console.log(localVar); 


