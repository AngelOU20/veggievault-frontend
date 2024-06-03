import PropTypes from 'prop-types';
import ClockImg from '../../assets/clock.svg';
import { Link } from 'react-router-dom';
import { categories } from '../../category/constants';

export const Card = ({ item }) => {
  const getCategoryStyle = (categoryName) => {
    const category = categories.find(
      (cat) => cat.name.toLowerCase() === categoryName?.toLowerCase()
    );
    return category
      ? { backgroundColor: category.backgroundColor, color: category.color }
      : { backgroundColor: '#fff', color: '#000' };
  };

  const categoryStyle = getCategoryStyle(item?.category);

  return (
    <li className="container flex justify-center md:justify-start">
      <div className="mx-w-sm">
        <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
          <img
            src={item?.thumbnail_image}
            // loading="lazy"
            alt="thumbnail image"
          />
          <div className="py-6 px-5 rounded-lg bg-white">
            <Link to={`/recipes/${item._id}`}>
              <h1 className="text-gray-700 font-bold text-xl mb-8 hover:text-gray-900 hover:cursor-pointer">
                {item?.name}
              </h1>
            </Link>

            {/* Category and reading times */}
            <div className="flex justify-between items-center flex-wrap">
              <button
                className="mt-6 py-2 px-4 font-medium rounded-lg shadow-sm hover:shadow-lg transition duration-300"
                style={{
                  backgroundColor: categoryStyle.backgroundColor,
                  color: categoryStyle.color,
                }}
              >
                {item?.category}
              </button>

              <div className="flex items-center py-2 mt-6">
                <img
                  src={ClockImg}
                  loading="lazy"
                  alt="clock"
                  className="recipe-icon small"
                />
                <div className="ml-1 text-secondary">
                  {item?.more?.[0]?.cook_time}
                </div>
              </div>
            </div>

            <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
              <span className="text-md capitalize">
                {item?.more?.[0]?.difficulty}
              </span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

Card.propTypes = {
  item: PropTypes.object,
};
