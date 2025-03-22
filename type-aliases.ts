//define a custom name for a type
//helps improve code readability and re usability

//we have a type alias string|number
// type stringOrNumber = string | number;
// let value: stringOrNumber = "Hi";
// console.log(value);
// value = 10;
// console.log(value);

//js does not have type aliases

//more examples
//type aliases in a function

// type stringOrNumber = string | number;
// function display(value: stringOrNumber): void {
//   console.log(`Value:${value}`);
// }
// display("Hello");
// display(100);

// //in an object
// type User = {
//   name: string;
//   age: number;
// };

// const person: User = { name: "Alice", age: 25 };
// console.log(person);
