// Implementation of Variables, Data Types, and typeof Function
let enrollmentNo = 23162581026n; 
let studentName = "Sujal Suthar"; 
let age = 19; 
let isStudent = true; 
let organization; 
let score = null; 
let uniqueId = Symbol("1005"); 

console.log("Enrollment No:", enrollmentNo);
console.log("Name:", studentName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Organization:", organization);
console.log("Score:", score);
console.log("Unique ID:", uniqueId);

console.log("Data Types:");
console.log("Enrollment No:", typeof enrollmentNo);
console.log("Name:", typeof studentName);
console.log("Age:", typeof age);
console.log("Is Student:", typeof isStudent);
console.log("Organization:", typeof organization);
console.log("Score:", typeof score);
console.log("Unique ID:", typeof uniqueId);

// Implementation of Arrays and Their Methods
let numbers = [15, 30, 25, 40, 50, 60, 75, 35, 45]; 

console.log("1. Join Method:");
console.log(" > Array as String:", numbers.join(" "), "\n");

numbers.push(5);
console.log("2. Push Method:");
console.log(" > Added '5' at the end:", numbers.join(" "), "\n");

numbers.pop();
console.log("3. Pop Method:");
console.log(" > Removed last element:", numbers.join(" "), "\n");

numbers.unshift(10);
console.log("4. Unshift Method:");
console.log(" > Added '10' at the beginning:", numbers.join(" "), "\n");

numbers.shift();
console.log("5. Shift Method:");
console.log(" > Removed first element:", numbers.join(" "), "\n");

let extraNumbers = [80, 85, 90];
let mergedArray = numbers.concat(extraNumbers);
console.log("6. Concatenation:");
console.log(" > Merged Array:", mergedArray.join(" "), "\n");

console.log("7. Reverse Method:");
console.log(" > Reversed Array:", numbers.reverse().join(" "));

// Implementation of Objects and Their Methods
let student = {
    "ID": 1026,
    "Name": "Sujal Suthar",
    "Batch": 44,
    "Semester": 4,
    "Enrollment No": 23162581026,
    "CGPA": { "Sem1": 6.5, "Sem2": 7.2 },
    "Email": "sujalsuthar@example.com",
    "Contact": 9876543210,
    "City": "Ahmedabad",
    "State": "Gujarat"
};

console.log(" > Display CGPA: ");
console.table(student.CGPA);

console.log(" > Display CGPA of Semester 2: " + student.CGPA.Sem2);

console.log(" > Object Keys:", Object.keys(student));
console.log(" > Object Values of CGPA:", Object.values(student.CGPA).join(" "));

console.log(" > Object Entries:");
console.table(Object.entries(student));

console.log(" > Iterating over Object Properties: ");
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

// Implementation of Different Types of Functions

console.log("Normal Function: ");

function performCalculation(a, b, operator) {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        default: return "Invalid Operator";
    }
}

console.log(` > Addition (5 + 10): ${performCalculation(5, 10, "+")}`);
console.log(` > Subtraction (5 - 10): ${performCalculation(5, 10, "-")}`);
console.log(` > Multiplication (5 * 10): ${performCalculation(5, 10, "*")}`);
console.log(` > Division (5 / 10): ${performCalculation(5, 10, "/")}`);

console.log("Anonymous Function:");

let calculate = function (a, b, operator) {
    return operator === "+" ? `Sum: ${a + b}` :
           operator === "-" ? `Difference: ${a - b}` :
           operator === "*" ? `Product: ${a * b}` :
           operator === "/" ? `Quotient: ${a / b}` : "Invalid Operator";
};

console.log(" > " + calculate(20, 10, "+"));
console.log(" > " + calculate(20, 10, "-"));
console.log(" > " + calculate(20, 10, "*"));
console.log(" > " + calculate(20, 10, "/"));

console.log("Arrow Function:");

let compute = (a, b, operator) => eval(`${a} ${operator} ${b}`);

console.log(` > Addition (30 + 20): ${compute(30, 20, "+")}`);
console.log(` > Subtraction (30 - 20): ${compute(30, 20, "-")}`);
console.log(` > Multiplication (30 * 20): ${compute(30, 20, "*")}`);
console.log(` > Division (30 / 20): ${compute(30, 20, "/")}`);
