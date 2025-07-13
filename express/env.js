// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);

import { z, ZodError } from "zod";
// import { PORT } from "./env";

// const ageSchema = z.number().min(18).max(100).int();
// const userAge = 17;

// const parseUserAge = ageSchema.parse(userAge);
// // const { data, error, success } = ageSchema.safeParse(userAge);

// console.log(success);

// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);

// try {
//   const parsedUserAge = ageSchema.parse(userAge);
//   console.log(parsedUserAge); // Success case
// } catch (error) {
//   // instanceof is a javaScript operator used to check if an objects is an instance of a speific class or constructor.
//   if (error instanceof ZodError) {
//     console.log(error.issues[0].message);
//   } else {
//     console.log("Unexpected error:", error);
//   }
// }

const portSchema = z.coerce.number().min(1).max(65535).default(3000);

export const PORT = portSchema.parse(process.env.PORT);
