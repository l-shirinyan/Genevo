import * as Yup from 'yup';

export const contactFormSchema = Yup.object({
  firstName: Yup.string()
    .max(50, 'First name must be at most 50 characters')
    .required('First name is required'),
  lastName: Yup.string()
    .max(50, 'Last name must be at most 50 characters')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string()
    .max(250, 'Message must be at most 250 characters')
    .required('Message is required'),
  password: Yup.string()
    .required('Message is required'),
});
