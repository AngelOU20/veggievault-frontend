import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../home/pages/Home';
import ErrorPage from '../error/pages/ErrorPage';
import CategoryPage from '../category/pages/CategoryPage';
import SearchPage from '../search/pages/SearchPage';
import SingleRecipe from '../recipes/pages/SingleRecipe';
import Recipes from '../recipes/pages/Recipes';
import ResourcesPage from '../resources/pages/ResourcesPage';
import About from '../about/pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/categories/:category',
        element: <CategoryPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/recipes/:id',
        element: <SingleRecipe />,
      },
      {
        path: '/recipes',
        element: <Recipes />,
      },
      {
        path: '/resources',
        element: <ResourcesPage />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
