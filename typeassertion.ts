//type assertion - tells typescript that we know more about the type than it does
let value: any = "Hello world";

//typescript assumes value is any so we tell it that it is a string
let strlength: number = (value as string).length;
console.log(strlength);
