// any
// let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.

// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;

// Type Annotations on Variables
// let myName: string = "Adolfo";
// console.log(myName);

// Functions
// Parameter Type Annotations
// function greet(name: string) {
//   console.log("Hello, " + name.toUpperCase() + "!");
// }
// greet("Adolfo");

// Return Type Annotations
// function getFavoriteNumber(): number {
//   return 8;
// }
// console.log(getFavoriteNumber());

// Functions Which Return Promises
// async function getFavoriteNumber(): Promise<number> {
//   return 8;
// }
// console.log(getFavoriteNumber());

// Anonymous Functions
// const names = ["Adolfo", "Júlia", "Sheila", "Yasmin"];
// // Contextual typing for function - parameter s inferred to have type string
// names.forEach(function (s) {
//   console.log(s.toUpperCase());
// });
// // Contextual typing also applies to arrow functions
// names.forEach((s) => {
//   console.log(s.toLowerCase());
// });

// Object Types
// The parameter's type annotation is an object type
// function printCoord(pt: { x: number; y: number }) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
// printCoord({ x: 10, y: 5});

// Optional Properties
// function printName(obj: { first: string, last?: string }) {
//   if (obj.last !== undefined) {
//     console.log(`The name is ${obj.first} ${obj.last}`);
//   } else if (obj.last == undefined) {
//     console.log(`The name is ${obj.first}`);
//   }
// }
// printName({ first: "Bob" });
// printName({ first: "Bob", last: "Marley" });

// Union Types
// Defining a Union Type
// function printId(id: number | string) {
//   console.log("Your ID is: " + id);
// }
// // OK
// printId(101);
// // OK
// printId("202");
// // Error
// // printId({ myID: 22342 });

// Working with Union Types
// function printId(id: number | string) {
//   console.log(id.toUpperCase());
// }

// function printId(id: number | string) {
//   if (typeof id === "string") {
//     // In this branch, id is of type 'string'
//     console.log(id.toUpperCase());
//   } else {
//     // Here, id is of type 'number'
//     console.log(id);
//   }
// }

// printId(101);
// printId("Jesus");

// function welcomePeople(x: string[] | string) {
//   if (Array.isArray(x)) {
//     // Here: 'x' is 'string[]'
//     console.log("Hello, " + x.join(" and "));
//   } else {
//     // Here: 'x' is 'string'
//     console.log("Welcome lone traveler: " + x);
//   }
// }

// welcomePeople(["Adolfo", "Jesus"]);

// Return type is inferred as number[] | string
// function getFirstThree(x: number[] | string) {
//   console.log(x.slice(0, 5));
// }

// // getFirstThree([1, 3]);
// getFirstThree("Jesus Cristo");

// Type Aliases
// type Point = {
//   x: number,
//   y: number
// };

// // Exactly the same as the earlier example
// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 100, y: 50 });

// type ID = number | string;

// Interfaces
interface Point {
  x: number,
  y: number,
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 50 });