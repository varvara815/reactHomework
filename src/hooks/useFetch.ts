import { useState, useEffect } from 'react';

import { FetchOptions, FetchResponse } from '../../custom';

const options: FetchOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};
const useFetch = (url: string, method: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        options.method = method;
        const response = await fetch(url, options);
        const data = await response.json();
        setData(data);

        const log = {
          payload: data,
          status: response.status,
        };
        localStorage.setItem('apiLogs', JSON.stringify(log));

        console.log(log);
      } catch (error) {
        setError((error as Error).message);
      }
    };
    fetchData();
  }, [url]);

  return { data, error };
};

export default useFetch;
