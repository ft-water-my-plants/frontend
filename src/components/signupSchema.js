import * as yup from 'yup';

const signUpSchema = yup.object().shape({

    username: yup
        .string()
        .required('You must enter a username!')
        .min(3, 'Your username must be at least 3 characters!'),
    // phoneNumber: yup
    //     .string()
    //     .required('You must enter a valid phone number!'),
    password: yup
        .string()
        .required('You must enter a password!')
        .min(4, 'Your password must be at least 4 characters!')
})

export default signUpSchema;