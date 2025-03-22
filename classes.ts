//typescript supports access modifiers

//access modifiers controls the visibility of class properties and methods
//public - accessible from anywhere
//private - accessible from within the class
//protected - accessible from within the class and its subclasses

// class Employee {
//   private id: number;
//   public name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//   }

//   getDetails(): string {
//     return `Id:${this.id},Name:${this.name}`;
//   }
// }

// const emp = new Employee(101, "Alice");
// console.log(emp.getDetails());

//error - id is private and can only be accessible within the class
// console.log(emp.id);

//js has no access modifiers
//in js - all properties are public by default
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getDetails() {
//     return `Name:${this.name},Age:${this.age}`;
//   }
// }

// const person1 = new Person("Sam", 25);
// console.log(person1.getDetails());

// class Person {
//   //accessible within the class and subclasses
//   protected age: number;
//   constructor(age: number) {
//     this.age = age;
//   }

//   getAge(): number {
//     return this.age;
//   }
// }

// class Student extends Person {
//   private name: string;
//   constructor(name: string, age: number) {
//     //call the parent constructor
//     super(age);
//     this.name = name;
//   }
//   getDetails(): string {
//     return `Name:${this.name},Age:${this.age}`;
//   }
// }

// const student = new Student("Bob", 20);
// console.log(student.getDetails());

// console.log(student.age);
