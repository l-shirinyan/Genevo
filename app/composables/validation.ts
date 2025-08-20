import * as Yup from 'yup';

export const contactFormSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Message is required'),
});
