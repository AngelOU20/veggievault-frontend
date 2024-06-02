import { Link } from 'react-router-dom';
import logo from '/logo-veggie.webp';

const ErrorPage = () => {
  return (
    <main className="grid h-svh place-items-center bg-primary px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex flex-col items-center text-center">
        <img src={logo} className="mb-8 w-4/5 lg:w-4/6" alt="logo" />

        <p className="text-base font-semibold text-veggie">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="transition ease-linear rounded-md bg-veggie px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-veggie-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-veggie"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
