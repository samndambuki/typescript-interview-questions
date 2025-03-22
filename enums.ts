//enums - Enumerations
//a way to define names consants

//this is an enum direction
//it defines four named values
//by default typescript assigns numeric values starting from 0
// enum Direction {
//   up,
//   down,
//   left,
//   right,
// }

// console.log(Direction.up);

//manually set values
// enum Status {
//   Success = 200,
//   NotFound = 404,
//   ServerError = 500,
// }

// console.log(Status.NotFound);

//in js we use objects to represent fixed values
const Direction = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
};

console.log(Direction.Up);
