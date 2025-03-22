//generics - concept of creating re usable and type safe functions

//function identity takes a single argument and returns it
//T - is a generic type parameter meaning that the functions does not enforce a specific type
//it will infer the type from the argument passed
//whatever type t is the function will return the same type
// function identity<T>(arg: T): T {
//   return arg;
// }

//number explicitly tells typescript that t is number
//the function takes 5 as a number and returns 5 as a number
// console.log(identity<number>(5));

//string tells typescript that t is string
// console.log(identity<string>("hello"));

//this ensures type safety - you cannot pass one type and expect another in return

//benefits of generics
//1. reusability  - function works with any type
//2. type safety - ensures the return type matches the input
//3. better code readability - makes it clear what types are being used

//in js does not have generics
// function identity(arg) {
//   return arg;
// }
