//never is used to represent a value that will never occur

//1. used in functions that throws errors
// function throwError(message: string): never {
//   throw new Error(message);
// }

// throwError("This function always htrows and error");

//2. used in infinite loops
// function infiniteLoop(): never {
//   while (true) {
//     console.log("Running forever...");
//   }
// }

//3. used in exhaustive typechecking in switch statements
//ensures that all possible cases are handled
// type Status = "success" | "error";
// function handleStatus(status: Status) {
//   switch (status) {
//     case "success":
//       console.log("operation was successful");
//       break;
//     case "error":
//       console.log("an error occurred");
//       break;
//     default:
//       const exhaustiveCheck: never = status;
//   }
// }

// handleStatus("success");
// handleStatus("error");
// handleStatus("unknown");
