import axios from 'axios'; 

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common['x-api-key']= 'live_03KQ0yVCbdWaOwve6qHgFADc0KnUGF27aHqZnte7JNVV2kf5ubIdQ7PZeRiKRhFl';

export const fetchBreeds = async () => {
    const response = await axios.get('/breeds');
    return response.data;
};

export const fetchCatByBreed = async breedId => {
    const response = await axios.get('/images/search', {
        params: { breed_id: breedId },
    });
    return response.data[0];
};

// const response = await axios.get(`/images/search?breed_id=${breedId}`);