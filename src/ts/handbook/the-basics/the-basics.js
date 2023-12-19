// Non-exception Failures
var user = {
    name: 'Adolfo',
    age: 34,
};
user.location; // returns undefined
// Legitimate bugs
// - Typos
var announcement = "Hello World!";
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();
announcement.toLocaleLowerCase();
// - Uncalled functions
function flipCoin() {
    return Math.random < 0.5;
}
// - Basic logic errors
var value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
    // ...
}
else if (value === "b") {
    // Oops, unreachable
}
// Type checking error
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date, "!"));
}
greet("Brendan", "27/10/1989");
