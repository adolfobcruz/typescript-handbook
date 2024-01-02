// Try it
// let x = 1;

// if (x === 1) {
//   let x = 2;

//   console.log(x);
//   // Expected output: 2
// }

// console.log(x);
// // Expected output: 1

// {
//   // TDZ starts at beginning of scope
//   console.log(bar); // "undefined"
//   console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
//   var bar = 1;
//   let foo = 2; // End of TDZ (for foo)
// }

// {
//   // TDZ starts at beginning of scope
//   const func = () => console.log(letVar); // OK

//   // Within the TDZ letVar access throws `ReferenceError`

//   let letVar = 3; // End of TDZ (for letVar)
//   func(); // Called outside TDZ!
// }

// {
//   let foo;
//   let foo; // SyntaxError: Identifier 'foo' has already been declared
// }

// function foo(a) {
//   let a = 1; // SyntaxError: Identifier 'a' has already been declared
// }
// try {
// } catch (e) {
//   let e; // SyntaxError: Identifier 'e' has already been declared
// }

// Redeclarations
// {
//   let foo;
//   let foo; // SyntaxError: Identifier 'foo' has already been declared
// }

// function foo(a) {
//   let a = 1; // SyntaxError: Identifier 'a' has already been declared
// }
// try {
// } catch (e) {
//   let e; // SyntaxError: Identifier 'e' has already been declared
// }

// let x = 1;

// switch (x) {
//   case 0:
//     let foo;
//     break;
//   case 1:
//     let foo; // SyntaxError: Identifier 'foo' has already been declared
//     break;
// }

let x = 1;

switch (x) {
  case 0: {
    let foo;
    break;
  }
  case 1: {
    let foo;
    break;
  }
}

// Examples