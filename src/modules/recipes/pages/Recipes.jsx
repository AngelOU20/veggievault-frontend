import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card, Spinner } from '../../../components';
import { useFetch } from '../../../hooks/useFetch';
import { fetchRecipes } from '../../../services/apiService';

const Recipes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;

  const memoizedParams = useMemo(() => ({ page }), [page]);

  const { data, isLoading, error } = useFetch(fetchRecipes, memoizedParams);

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
          data?.recipes?.map((item) => (
            <React.Fragment key={item._id}>
              <Card item={item} />
            </React.Fragment>
          ))}
      </ul>

      <div className="flex justify-center mt-10">
        {Array.from({ length: data?.totalPages || 0 }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 mx-1 ${
              parseInt(page) === i + 1
                ? 'bg-secondary text-white'
                : 'bg-gray-200 text-secondary'
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
