import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../../components/Card/Card';
import { Link } from 'react-router-dom';

export const LatestRecipe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [latestRecipes, setLatestRecipes] = useState([]);

  useEffect(() => {
    const fetchLatestRecipes = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          'http://localhost:3000/api/latest-recipes'
        );
        setLatestRecipes(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching the latest recipes:', error);
      }
    };

    fetchLatestRecipes();
  }, []);

  return (
    <div className="px-5 xl:px-10 py-16">
      <h2 className="text-3xl mb-8 font-semibold text-secondary sm:text-5xl sm:leading-relaxed">
        Latest recipes
      </h2>

      {isLoading && <div>Loading...</div>}

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {latestRecipes.map((item) => (
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
