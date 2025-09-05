import * as Yup from "yup";

export const signupFormSchema = Yup.object({
  fullName: Yup.string()
    .max(50, "First name must be at most 50 characters")
    .required("First name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string(),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
