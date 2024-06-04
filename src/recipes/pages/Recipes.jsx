import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Spinner } from '../../components';
import { useSearchParams } from 'react-router-dom';

const Recipes = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          `http://localhost:3000/api/paginated-recipes?page=${page}&limit=8`
        );
        setResults(response.data.recipes);
        setTotalPages(response.data.totalPages);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message || 'Error fetching data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [page]);

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage });
  };

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-3xl text-center mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
        All Recipes
      </h1>

      {isLoading && <Spinner />}

      {error && <div>{error}</div>}

      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {!isLoading &&
          results?.map((item) => (
            <React.Fragment key={item._id}>
              <Card item={item} />
            </React.Fragment>
          ))}
      </ul>

      <div className="flex justify-center mt-10">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 mx-1 ${
              page === i + 1 ? 'bg-secondary' : 'bg-gray-200'
            } hover:bg-secondary hover:text-white`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
