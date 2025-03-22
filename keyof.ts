//keyof - extracts keys(property names) of a type as union of  string literals

interface User {
  id: number;
  name: string;
  age: number;
}

type UserKeys = keyof User; //"id" | "name" | "age"
let key: UserKeys = "name";
