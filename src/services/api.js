import axios from 'axios';

import toast from 'react-hot-toast';

const API_KEY = '29966303-d9893c98832d118b1f4c04955';
const BASE_URL = 'https://pixabay.com/api/';

export const getImages = async (searchName, page) => {
  const options = new URLSearchParams({
    key: `${API_KEY}`,
    q: searchName,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  });
  const URL = `${BASE_URL}?${options}`;
  try {
    const response = await axios.get(URL);
    return response.data.hits;
  } catch (error) {
    return toast(
      `Nooooooooo we cannot find ${searchName}😢
        Please try again`
    );
  }
};
