import * as Yup from 'yup';

export const signupFormSchema = Yup.object({
  fullName: Yup.string()
    .max(50, 'First name must be at most 50 characters')
    .required('First name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Message is required'),
});
