import { useNavigate, useParams } from 'react-router-dom';
import CategoryWrapper from '../components/CategoryWrapper';
import { categories } from '../constants';
import { useEffect, useState } from 'react';

const CategoryPage = () => {
  const [isValidCategory, setIsValidCategory] = useState(false);
  const { category } = useParams();
  const navigate = useNavigate();

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
    </div>
  );
};

export default CategoryPage;
