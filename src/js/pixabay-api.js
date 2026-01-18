import axios from "axios";


const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '54209889-58d3cb94a4da7a2360dbb6f61';


export function getImagesByQuery(query) {
const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };
    return axios.get(BASE_URL, { params })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}
