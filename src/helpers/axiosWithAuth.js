import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://water-my-plants-bw3.herokuapp.com/api/plants'
    });
};

export default axiosWithAuth;