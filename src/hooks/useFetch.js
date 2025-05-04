import { useState, useEffect } from 'react';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setData(data);

        const log = {
          payload: data,
          status: response.status,
        };
        localStorage.setItem('apiLogs', JSON.stringify(log));
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;
