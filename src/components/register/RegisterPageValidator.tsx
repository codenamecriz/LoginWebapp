import * as yup from "yup";

export const RegisterPageValidator = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  username: yup
    .string()
    .min(4, "Username should be of minimum 4 characters length")
    .max(10, "Username should be of maximum 10 characters length")
    .required("Password is required"),
});
