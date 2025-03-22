//Partial<T> when you need optional properties
//PIck<T,K> when you need only specific properties

//example
interface User {
  name: string;
  age: number;
}

const partialUser: Partial<User> = { name: "Alice" };
const pickedUser: Pick<User, "name"> = { name: "Sam" };
