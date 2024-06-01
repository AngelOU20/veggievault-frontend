import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../home/pages/Home';
import { ErrorPage } from '../error/pages/ErrorPage';
import CategoryPage from '../category/pages/CategoryPage';

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
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
