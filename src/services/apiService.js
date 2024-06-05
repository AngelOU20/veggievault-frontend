import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { VITE_API_URL } = getEnvVariables();

export const fetchRecipes = async (params) => {
  try {
    const { page = 1, limit = 8 } = params;
    const response = await axios.get(`${VITE_API_URL}/paginated-recipes`, {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching data');
  }
};

export const fetchCategory = async (category) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/categories/${category}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching data');
  }
};

export const searchRecipes = async (query) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/recipes`, {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching data');
  }
};

export const fetchSingleRecipe = async (id) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/recipes/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching data');
  }
};

export const fetchLatestRecipes = async () => {
  try {
    const response = await axios.get(`${VITE_API_URL}/latest-recipes`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Error fetching latest recipes'
    );
  }
};
