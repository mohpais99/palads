import Axios from "axios";

let urls = {
    development: 'http://localhost:3000/api/',
    production: 'https://your-production-url.com/api/'
}

// export const testapis = process.env['APP_URL_' + urls.toUpperCase()]

const api = Axios.create({
    // baseURL: process.env[`APP_URL_${urls.toUpperCase()}`] + '/api/',
    baseURL: urls[process.env.NODE_ENV],
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

api.interceptors.response.use(
    async (response) => {
        return Promise.resolve({data: response.data})
    },
    async (error) => {
        switch (error.response.status) {
            case 401:
                error.response.message = 'No authorize!'
                break;
            case 404:
                error.response.message = 'Not Found!'
                break;
            default:
                error.response.message = 'Internal Server Error'
                break;
        }
        return Promise.reject({error: error.response.message});
    }
)

export default api;