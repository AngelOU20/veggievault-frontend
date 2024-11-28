import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../error/pages/ErrorPage';

import { Spinner } from '../components';

const Home = lazy(() => import('../modules/home/pages/Home'));
const CategoryPage = lazy(() =>
  import('../modules/category/pages/CategoryPage')
);
const SearchPage = lazy(() => import('../modules/search/pages/SearchPage'));

const SingleRecipe = lazy(() =>
  import('../modules/recipes/pages/SingleRecipe')
);
const Recipes = lazy(() => import('../modules/recipes/pages/Recipes'));
const ResourcesPage = lazy(() =>
  import('../modules/resources/pages/ResourcesPage')
);
const About = lazy(() => import('../modules/about/pages/About'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/categories/:category',
        element: (
          <Suspense fallback={<Spinner />}>
            <CategoryPage />
          </Suspense>
        ),
      },
      {
        path: '/search',
        element: (
          <Suspense fallback={<Spinner />}>
            <SearchPage />
          </Suspense>
        ),
      },
      {
        path: '/recipes/:id',
        element: (
          <Suspense fallback={<Spinner />}>
            <SingleRecipe />
          </Suspense>
        ),
      },
      {
        path: '/recipes',
        element: (
          <Suspense fallback={<Spinner />}>
            <Recipes />
          </Suspense>
        ),
      },
      {
        path: '/resources',
        element: (
          <Suspense fallback={<Spinner />}>
            <ResourcesPage />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Spinner />}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
