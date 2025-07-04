import { useEffect, useState } from 'react';

import { type FetchOptions, FetchResponse } from '../../custom';

const options: FetchOptions = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * Custom hook for making HTTP requests
 *
 * @hook
 * @description Performs HTTP requests with automatic error handling and logging.
 * Stores API response logs in localStorage and provides loading states.
 * Re-runs the request when URL or method changes.
 *
 * @param {string} url - The URL to fetch data from
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE, etc.)
 *
 * @returns {Object} Object containing fetched data and error state
 * @returns {any|null} returns.data - The fetched data or null if no data/error
 * @returns {string|null} returns.error - Error message if request failed, null otherwise
 *
 * @example
 * ```tsx
 * const { data, error } = useFetch('https://api.example.com/users', 'GET');
 *
 * if (error) return <div>Error: {error}</div>;
 * if (!data) return <div>Loading...</div>;
 * return <div>{JSON.stringify(data)}</div>;
 * ```
 */
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
  }, [url, method]);

  return { data, error };
};

export default useFetch;
