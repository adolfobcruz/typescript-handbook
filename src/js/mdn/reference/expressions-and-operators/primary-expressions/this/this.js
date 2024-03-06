// Try it
// const test = {
//   prop: 34,
//   func: function () {
//     return this.prop;
//   },
// };

// console.log(test.func());

// Function context
// function getThis() {
//   return this;
// }

// const obj1 = { name: "obj1" };
// const obj2 = { name: "obj2" };

// obj1.getThis = getThis;
// obj2.getThis = getThis;

// console.log(obj1.getThis());
// console.log(obj2.getThis());

// const obj3 = {
//   __proto__: obj1,
//   name: "obj3",
// };

// console.log(obj3.getThis());

// const obj4 = {
//   name: "obj4",
//   getThis() {
//     return this;
//   },
// };

// const obj5 = { name: "obj5" };

// obj5.getThis = obj4.getThis;

// console.log(obj4);
// console.log(obj5.getThis());

// function getThisStrict() {
//   "use strict";
//   return this;
// }

// Number.prototype.getThisStrict = getThisStrict;
// console.log(typeof (1).getThisStrict());
// console.log(typeof getThisStrict());

function getThis() {
  return this;
}

// Only for demonstration — you should not mutate built-in prototypes
Number.prototype.getThis = getThis;
console.log(typeof (1).getThis()); // "object"
console.log(getThis() === globalThis); // true
