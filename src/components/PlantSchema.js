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

    water: yup
    .string()
    .oneOf(['Three times a day', 'Twice a day', 'Once a day', 'Once a week', 'Once a month'], 'Must be one of our frequencies'),

    plant_id: yup
    .string()
    .required('Plant ID is required.')


})

export default plantSchema