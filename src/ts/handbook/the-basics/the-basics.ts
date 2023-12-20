/*
// Non-exception Failures
const user = {
  name: 'Adolfo',
  age: 34,
};

user.location; // returns undefined

// Legitimate bugs
// - Typos
const announcement = "Hello World!";

announcement.toLocaleLowercase();
announcement.toLocalLowerCase();
announcement.toLocaleLowerCase();

// - Uncalled functions
function flipCoin() {
  return Math.random < 0.5;
}

// - Basic logic errors
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
  // Oops, unreachable
}

// Type checking error
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brendan", "27/10/1989");
*/