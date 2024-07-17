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

  fetcher.post = function (url, data) {
    return fetcher(url, {
      method: 'POST',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  fetcher.get = function (url, params) {
    return fetcher(url, {
      method: 'GET',
      params,
    });
  };

  fetcher.patch = function (url, data) {
    return fetcher(url, {
      method: 'PATCH',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  export default fetcher;