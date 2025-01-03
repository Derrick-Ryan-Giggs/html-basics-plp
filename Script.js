// Part 1: JavaScript Basics

// Variables and Data Types
let name = "Alice"; // A text value (string)
let age = 20; // A number
let isStudent = true; // A yes/no value (boolean)
let hobbies = ["Painting", "Dancing", "Reading"]; // A list (array)
let person = { firstName: "Bob", lastName: "Smith" }; // An object with properties

// Print the values and their types
console.log("Name:", name, "(Type:", typeof name + ")");
console.log("Age:", age, "(Type:", typeof age + ")");
console.log("Is student:", isStudent, "(Type:", typeof isStudent + ")");
console.log("Hobbies:", hobbies, "(Type:", typeof hobbies + ")");
console.log("Person:", person, "(Type:", typeof person + ")");

// Simple Calculator
function calculator() {
  let num1 = parseFloat(prompt("Enter the first number:")); // First number
  let num2 = parseFloat(prompt("Enter the second number:")); // Second number
  let operation = prompt("Choose an operation (+, -, *, /):"); // Operation

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
    return;
  }

  let result;
  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    if (num2 === 0) {
      alert("Cannot divide by zero!");
      return;
    }
    result = num1 / num2;
  } else {
    alert("Invalid operation!");
    return;
  }

  alert("Result: " + result);
}

// Call the calculator
calculator();

// Greeting Function
function greetUser(userName) {
  return "Hello, " + userName + "! Welcome to the JavaScript Assignment.";
}

// Show the greeting message
let greeting = greetUser("Alice");
document.body.insertAdjacentHTML("beforeend", `<p>${greeting}</p>`);

// Part 2: Control Structures

// Check Voting Eligibility
let userAge = parseInt(prompt("Enter your age:"));
if (userAge >= 18) {
  document.body.insertAdjacentHTML("beforeend", `<p>You are eligible to vote!</p>`);
} else {
  document.body.insertAdjacentHTML("beforeend", `<p>You are not old enough to vote yet.</p>`);
}

// Display Numbers from 1 to 10
let numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
  numberList.insertAdjacentHTML("beforeend", `<li>${i}</li>`);
}

// Part 3: DOM Manipulation

// Change Heading Text
let heading = document.querySelector("h1");
heading.textContent = "JavaScript in Action!";

// Add Content Dynamically
let dynamicContentDiv = document.getElementById("dynamic-content");
dynamicContentDiv.innerHTML = `<p>This content was added using JavaScript!</p>`;
