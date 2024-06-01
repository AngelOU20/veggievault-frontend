import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../home/pages/Home';
import { ErrorPage } from '../error/pages/ErrorPage';

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
    ],
  },
]);

export default router;
