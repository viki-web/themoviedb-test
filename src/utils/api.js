import axios from 'axios';

const API_KEY = 'e870bf92a3befaf1589d3bc282f03616';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      params: {
        api_key: API_KEY,
        ...params,
        // Add a random number to ensure unique requests
        random: Math.random(),
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};