import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card';

const Recipes = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          'http://localhost:3000/api/all-recipes'
        );
        setResults(response.data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message || 'Error fetching data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-3xl text-center mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
        All Recipes
      </h1>

      {isLoading && <div>Loading...</div>}

      {error && <div>{error}</div>}

      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {results?.map((item) => (
          <React.Fragment key={item._id}>
            <Card item={item} />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
