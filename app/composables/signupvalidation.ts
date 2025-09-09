import * as Yup from "yup";

export const signupFormSchema = Yup.object({
  fullName: Yup.string()
    .max(50, "First name must be at most 50 characters")
    .required("First name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phoneNumber: Yup.string()
    .max(15, "Phone number must be at most 15 characters")
    .required("Phone is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),

  smsOptIn: Yup.boolean()
    .oneOf([true], "You must agree to receive SMS notifications")
    .required("This field is required"),

  termsAccepted: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("This field is required"),
});
