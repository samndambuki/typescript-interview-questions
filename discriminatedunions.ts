//allows you to define a common discriminant tag for different possible error cases
//example 1 - handling API response with success and error cases
// type APIResponse =
//   | { status: "success"; data: string }
//   | { status: "error"; message: string };

// //function to simulate API call
// function fetchData(success: boolean): APIResponse {
//   if (success) {
//     return { status: "success", data: "User data received" };
//   } else {
//     return { status: "error", message: "Failed to fetch user data" };
//   }
// }

// console.log(fetchData(true));

//example 2

//discriminated unions allow you to handle different types in a safe way using a common odiscriminant property
// type success = { status: "success"; data: string };
// type failure = { status: "failure"; error: string };

// type ApiResponse = success | failure;

// function handleResponse(response: ApiResponse) {
//   if (response.status === "success") {
//     console.log(response.data);
//   } else {
//     console.log(response.error);
//   }
// }

// handleResponse({ status: "success", data: "User data received" });
