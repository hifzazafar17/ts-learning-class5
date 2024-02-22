"use strict";
// Using 'any': A type that allows any value and disables type checking
let anyVariable = 10;
anyVariable = "Hello, TypeScript!";
anyVariable = true;
// Example: 'any' allows assigning values of different types without complaints
let mixedArray = [1, "two", true];
console.log(mixedArray); // Output: [1, "two", true]
// Using 'unknown': A type-safe counterpart to 'any', requires type assertion or checking
let unknownVariable = 10;
// The following line will result in a compilation error until the type is asserted or checked
let numberValue = unknownVariable; // Type assertion
console.log(numberValue); // Output: 10
// Using 'never': Represents a value that will never occur, often used for functions that throw errors
function throwError(message) {
    throw new Error(message);
}
// Example: Function that never completes its execution
function infiniteLoop() {
    while (true) {
        console.log("This loop will never end!");
    }
}
// Using 'never' for exhaustive type checking
function exhaustiveCheck(value) {
    // This function ensures that all possible cases are covered
    // The function will only accept values that are never expected to occur
}
// Example: A function that only accepts specific values and throws an error for others
function processStatus(status) {
    switch (status) {
        case "loading":
            console.log("Loading...");
            break;
        case "success":
            console.log("Success!");
            break;
        case "error":
            console.error("Error!");
            break;
        default:
            // Handle unexpected cases
            exhaustiveCheck(status);
    }
}
// Testing the function with valid and invalid values
processStatus("loading"); // Output: Loading...
processStatus("success"); // Output: Success!
// Uncommenting the line below will result in a compilation error
// processStatus("invalid-status");
