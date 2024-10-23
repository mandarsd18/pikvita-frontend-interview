import { createBrowserRouter } from 'react-router-dom'
import Root from './Root'
import ErrorPage from '../pages/Error/ErrorPage'
import Home from '../pages/Home/Home'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])

export default Router
