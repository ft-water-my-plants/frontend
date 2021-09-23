import * as yup from 'yup'

const plantSchema = yup.object().shape({

    nickname: yup
    .string()
    .trim()
    .required('Nickname is required'),

    species: yup
    .string()
    .trim()
    .required('Species is required.'),

    h2oFrequency: yup
    .number()
    .oneOf([1, 2, 3, 4, 5], 'Must be one of our frequencies'),

    image: yup
    .string()

})

export default plantSchema