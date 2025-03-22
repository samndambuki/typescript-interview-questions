//difference 1

//type - used to handle more complext types like unions
// type Id = number | string;
// let userId: Id = 101;
// userId = "ABC123";

//interface - used to define the strucutre/shape of an object
// interface User {
//   name: string;
//   age: number;
// }

// const person: User = { name: "John", age: 25 };

//difference 2

//type cannot be extended but interface can
// interface Person {
//   name: string;
// }

// interface Employee extends Person {
//   salary: number;
// }

// const emp: Employee = { name: "Sam", salary: 2000000 };

//type works using intersection
// type Animal = { species: string };
// type Dog = Animal & { breed: string };
// const pet: Dog = { species: "Canine", breed: "Labrador" };

//difference 3
//type cannot be re declared
// interface Car {
//   brand: string;
// }

// interface Car {
//   model: string;
// }

// const myCar: Car = { brand: "Toyota", model: "Corolla" };
