import { useEffect, useState } from 'react';

export function useFetch(apiUrl, options, getshouldFetch) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}`, `${options}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (getshouldFetch()) {
      fetchData();
    }
  }, [apiUrl, options]);
  return { data, isLoading, hasError: error !== null, error };
}
