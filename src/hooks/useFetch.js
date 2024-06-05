import { useEffect, useState } from 'react';

export const useFetch = (fetchFunction, params = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await fetchFunction(params);
        setData(result);
      } catch (error) {
        setError(error.message || 'Error fetching data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction, params]);

  return { data, isLoading, error };
};
