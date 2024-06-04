import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CategoryWrapper from '../components/CategoryWrapper';
import { categories } from '../constants';
import { Card, Skeleton } from '../../components';

const CategoryPage = () => {
  const [isValidCategory, setIsValidCategory] = useState(false);
  const { category } = useParams();
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      setIsLoading(true);

      try {
        const resp = await axios.get(
          `http://localhost:3000/api/categories/${category}`
        );
        setRecipes(resp.data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message || 'Error loading category');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategoryData();
  }, [category]);

  useEffect(() => {
    const categoryExists = categories.some((cat) => cat.href === category);
    setIsValidCategory(categoryExists);

    if (!categoryExists) {
      navigate('/not-category');
    }
  }, [category, navigate]);

  if (!isValidCategory) {
    return;
  }

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="capitalize text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        {category}
      </h1>

      <CategoryWrapper />

      {isLoading && (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Skeleton />
          <Skeleton />
        </div>
      )}

      {error && <div>{error}</div>}

      <ul className=" mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {!isLoading &&
          recipes?.map((item) => (
            <React.Fragment key={item._id}>
              <Card item={item} />
            </React.Fragment>
          ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
