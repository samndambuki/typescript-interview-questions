//restrict the types that can be passed to a generic function, class or interface
//example
// function getProperty<T extends { name: string }>(obj: T): string {
//   return obj.name;
// }

// const person = { name: "Sam", age: 25 };
// console.log(getProperty(person));

// const numberValue = 42;
//error
// console.log(getProperyty(numberValue));
