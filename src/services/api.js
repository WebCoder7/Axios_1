import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; 

export const getPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error.response);
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    const response = await axios.post(`${BASE_URL}/posts`, post, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error.response);
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/posts/${id}`);
  } catch (error) {
    console.error('Error deleting post:', error.response);
    throw error;
  }
};
