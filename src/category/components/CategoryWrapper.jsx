import { Link } from 'react-router-dom';
import { categories } from '../constants';
import PropTypes from 'prop-types';
import React from 'react';

const CategoryItem = ({ name, href, backgroundColor, color }) => {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
    borderColor: color,
  };

  return (
    <li className="list-none">
      <Link to={href} className="rounded-full">
        <div
          className="text-sm uppercase px-6 py-2 text-center rounded-full"
          style={style}
        >
          {name}
        </div>
      </Link>
    </li>
  );
};

const CategoryList = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-8">
      {categories.map((category, index) => (
        <React.Fragment key={index}>
          <CategoryItem
            name={category.name}
            href={`/categories/${category.href}`}
            backgroundColor={category.backgroundColor}
            color={category.color}
          />
        </React.Fragment>
      ))}
    </ul>
  );
};

const CategoryWrapper = () => {
  return (
    <>
      <CategoryList />
    </>
  );
};

CategoryItem.propTypes = {
  name: PropTypes.string,
  href: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

export default CategoryWrapper;
