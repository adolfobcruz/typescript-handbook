// any
// let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
function sanitizeInput(str) {
    return sanitize(str);
}
// Create a sanitized input
var userInput = sanitizeInput(getInput());
// Can still be re-assigned with a string though
userInput = "new input";
