//allow typescript select a type based on a condition
//similar to ternary operators in js but at the type level

//example usage
type CheckType<T> = T extends number ? "number" : "Other type";
type A = CheckType<number>;
type B = CheckType<string>;
