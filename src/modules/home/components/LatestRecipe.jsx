import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Spinner } from '../../../components';
import { fetchLatestRecipes as getLatestRecipes } from '../../../services/apiService';

export const LatestRecipe = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [latestRecipes, setLatestRecipes] = useState([]);

  useEffect(() => {
    const fetchLatestRecipes = async () => {
      setIsLoading(true);

      try {
        const data = await getLatestRecipes();
        setLatestRecipes(data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError('Error fetching the latest recipes:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestRecipes();
  }, []);

  return (
    <div className="px-5 xl:px-10 py-16">
      <h2 className="text-3xl mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
        Latest recipes
      </h2>

      {isLoading && <Spinner />}

      {error && <div>{error}</div>}

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {!isLoading &&
          latestRecipes?.map((item) => (
            <React.Fragment key={item._id}>
              <Card item={item} />
            </React.Fragment>
          ))}
      </ul>

      <div className="flex justify-center items-center mt-10">
        <Link
          to={'/recipes'}
          className="py-4 px-8 hover:bg-btnColor text-secondary hover:text-white w-full sm:w-auto transition ease-in duration-200 text-center text-base font-semibold border border-[#9c702a] rounded-lg"
        >
          View all recipes
        </Link>
      </div>
    </div>
  );
};
