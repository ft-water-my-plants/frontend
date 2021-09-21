import * as yup from 'yup';

const LoginSchema = yup.object().shape({

    username: yup
        .string()
        .required('You must enter your username!'),
    phoneNumber: yup
        .string()
        .required('You must enter your phone number!'),
    password: yup
        .string()
        .required('You must enter your password!'),
    
})

export default LoginSchema;