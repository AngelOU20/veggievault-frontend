import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const DesktopNav = ({ menuItems, logo }) => {
  return (
    <nav className="h-16 flex justify-between items-center px-6 md:px-12 mb-7">
      <a href="/">
        <img src={logo} className="h-10" alt="logo" />
      </a>

      <ul className="flex gap-x-10">
        {menuItems?.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item}
              className="font-medium capitalize text-secondary"
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="flex items-center gap-4 font-medium">
        <li>
          <button className="text-secondary px-4 py-2 rounded border border-secondary">
            Log In
          </button>
        </li>
        <li>
          <button className="text-secondary px-4 py-2 rounded">Sign up</button>
        </li>
      </ul>
    </nav>
  );
};

DesktopNav.propTypes = {
  menuItems: PropTypes.array,
  logo: PropTypes.any,
};
