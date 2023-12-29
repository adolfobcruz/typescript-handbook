/*
// Try it
var x = 1;

if (x === 1) {
  var x = 2;

  console.log(x);
  // Expected output: 2
}

console.log(x);
// Expected output: 2

// Syntax
var name1;
var name2 = "value2";
var name3 = "value3", name4 = "value4";
var name5, name6 = "value5-6";
var name6 = "value6", name7 = "value7";
console.log(name1, name2, name3, name4, name5, name6, name7);

// Description
function foo() {
  var x = 1;

  function bar() {
    var y = 2;

    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }

  bar();

  console.log(x); // 1 (`x` is in scope)
  console.log(y); // ReferenceError, `y` is scoped to `bar`
}

foo();
*/

// bla = 1;
// var bla;
// console.log(bla);

// function doSomething() {
//   console.log(bar); // undefined
//   var bar = 111;
//   console.log(bar); // 111
// }

// doSomething();

// Redeclarations
// var a = 1;
// var a = 2;
// console.log(a); // 2
// var a;
// console.log(a); // 2; not undefined

// var a = 1;
// function a() { }
// console.log(a); // 1

// var a = 1;
// let a = 2; // SyntaxError: Identifier 'a' has already been declared

// let a = 1;
// {
//   var a = 1; // SyntaxError: Identifier 'a' has already been declared
// }

// var a = 1;
// console.log(a);
// {
//   let a = 2;
//   console.log(a);
// }
// console.log(a);

// function foo(a) {
//   var a = 1;
//   console.log(a);
// }

// foo(2); // Logs 1

// try {
//   throw 1;
// } catch (e) {
//   var e = 2; // Works
// }
// console.log(e); // undefined

// Examples
// var a = 0,
//   b = 0;
// console.log(a, b);

// var a = "A";
// var b = a;
// console.log(a, b);

// var a, b = a = "A";
// console.log(a, b);

// var x = y,
//   y = "A";
// console.log(x, y); // undefined A

// var x = 0;
// function f() {
//   var x = y = 1; // Declares x locally; declares y globally.
// }
// f();

// console.log(x, y); // 0 1

// // In non-strict mode:
// // x is the global one as expected;
// // y is leaked outside of the function, though!

// "use strict";
// var x = 0;
// function f() {
//   var x = y = 1; // ReferenceError: y is not defined
// }
// f();

// console.log(x, y);

const result = /(a+)(b+)(c+)/.exec("aaabcc");
var [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
