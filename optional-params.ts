//optional parameters allows us to define optional parameters that may or may not be provided when calling a function
//helps avoid errors when dealing with optional values
function greet(name: string, age?: number): string {
  return age ? `Hello, ${name} you are ${age} years old` : `Hello ${name}`;
}

console.log(greet("John"));
console.log(greet("Alice", 25));

//js does not have optional parameters

//in ts we can provide default values
function sayHi(name: string, age: number = 18): string {
  return `Hello ${name} you are ${age} years old`;
}

console.log(sayHi("Sam"));
