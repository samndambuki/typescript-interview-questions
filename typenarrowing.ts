//type narrowing occurs when typescript reduces the type of a variable
//to a more specific type using type guards such as typeof and instanceof

//1. typeof for primitive types
// function PrintValue(value: string | number) {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else {
//     console.log(value.toFixed(2));
//   }
// }

// PrintValue("Hello World");
// PrintValue(10);

//instanceof for classes
// class Dog {
//   bark() {
//     console.log("Woof!");
//   }
// }

// class Cat {
//   meow() {
//     console.log("meow");
//   }
// }

// function makeSound(animal: Dog | Cat) {
//   if (animal instanceof Dog) {
//     animal.bark();
//   } else {
//     animal.meow();
//   }
// }

// makeSound(new Dog());
// makeSound(new Cat());

//in for object properties
// type Car = { brand: string; speed: number };
// type Bicycle = { brand: string; gearCount: number };

// function getVehicleInfo(vehicle: Car | Bicycle) {
//   if ("speed" in vehicle) {
//     console.log(`Car speed :${vehicle.speed}`);
//   } else {
//     console.log(`Bicycle gears : ${vehicle.gearCount}`);
//   }
// }

// getVehicleInfo({ brand: "Toyota", speed: 100 });
// getVehicleInfo({ brand: "Hero", gearCount: 10 });
