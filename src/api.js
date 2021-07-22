import axios from 'axios';

// const headers = {
//     'X-CSRF-TOKEN'    : 'XSRF-TOKEN',
//     'X-Requested-With': 'XMLHttpRequest',
// };
const apiClient = axios.create({
    baseURL: 'https://hirer-be.herokuapp.com/api/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    withCredentials: true,
});

// apiClient.interceptors.response.use(function(response){
//     return response;
// }, function(error){
//     if(error.response.status !== 419) return Promise.reject(error);
//     window.location.reload();
// });
// apiClient.interceptors.response.use(response => response, error => httpFail(error));

export default apiClient;
