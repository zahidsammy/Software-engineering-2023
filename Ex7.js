// Function for addition
function Sum(a, b) {
    return a + b;
}

// Function for subtraction
function minus(a, b) {
    return a - b;
}

// Function for multiplication
function multiply(a, b) {
    return a * b;
}

// Function for division
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Division by zero is not allowed.";
    }
}

// Unit tests for mathematical operation functions
function testMathOperations() {
    console.log("Testing the add function:");
    console.log(Sum(5, 3) === 8); // Should return true
    console.log(Sum(-5, 3) === -2); // Should return true
    console.log(Sum(0, 0) === 0); // Should return true

    console.log("Testing the subtract function:");
    console.log(minus(10, 4) === 6); // Should return true
    console.log(minus(5, 10) === -5); // Should return true
    console.log(minus(0, 7) === -7); // Should return true

    console.log("Testing the multiply function:");
    console.log(multiply(6, 7) === 42); // Should return true
    console.log(multiply(0, 100) === 0); // Should return true
    console.log(multiply(-3, -4) === 12); // Should return true

    console.log("Testing the divide function:");
    console.log(divide(8, 2) === 4); // Should return true
    console.log(divide(10, 0) === "Division by zero is not allowed."); // Should return true
    console.log(divide(-12, 3) === -4); // Should return true
}

// Run the unit tests
testMathOperations();
