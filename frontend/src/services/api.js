import axios from 'axios';

async function fetcher(url, options = {}) {
    try {
      const response = await axios({
        url: `http://localhost:5000${url}`,
        ...options,
        headers: {
          ...options.headers,
        },
      });
  
      return response.data;
    } catch (error) {
      const err = new Error();
      err.cause = error.response?.data?.message;
      err.original = error.response?.data;
  
      throw err;
    }
  }

  export default fetcher;