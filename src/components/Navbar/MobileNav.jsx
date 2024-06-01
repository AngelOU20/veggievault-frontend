import PropTypes from 'prop-types';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const MobileNav = ({ menuItems, logo, onOpen, onClose, hideLeft }) => {
  return (
    <nav className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={logo} className="w-1/2" alt="logo" />
      </a>

      <button onClick={onOpen} className="border border-primary rounded">
        <FaBarsStaggered className="h-6 w-6" />
      </button>

      <div
        className={`transition-all ease-in-out delay-500 w-full h-full fixed z-50 top-0 bg-primary ${hideLeft} flex justify-center items-center`}
      >
        <button onClick={onClose} className="absolute right-8 top-32">
          <FaXmark className="h-6 w-6" />
        </button>

        <div>
          <ul className="flex flex-col gap-5">
            {menuItems?.map((item, index) => (
              <li key={index}>
                <Link
                  to={item}
                  className="font-medium capitalize text-secondary text-2xl"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-4 font-medium mt-10">
            <li>
              <button className="text-secondary px-4 py-2 rounded border border-secondary">
                Log In
              </button>
            </li>
            <li>
              <button className="text-secondary px-4 py-2 rounded">
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

MobileNav.propTypes = {
  menuItems: PropTypes.array,
  logo: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  hideLeft: PropTypes.string,
};
