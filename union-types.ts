//union-types  - allow a variable to hold multiple types
// a variable can be either of the specified types
//the pipe symbol | is used to define a union type

//we restrict a variable to either a string/number
let variable: string | number;
variable = "Hello";
console.log(variable);
variable = 100;
console.log(variable);
//error
// variable = true;

//in js - does not enforce types
//a variable can switch between any type without errors
//can lead to unintended bugs in large application
// let variable = "Hello"
// variable = 100

//more examples
//union tpyes with functions
function printId(id: string | number): void {
  console.log(`Id : ${id}`);
}

// printId(123);
printId("ABC123");

//union types with functions
let values: (string | number)[] = ["Hello", 123, "World"];
console.log(values);
