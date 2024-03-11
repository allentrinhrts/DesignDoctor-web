import { RouteObject } from 'react-router-dom'
import Unauthenticated from '../layouts/Unauthenticated'
import Authenticated from '../layouts/Authenticated'
import Dashboard from '../pages/Dashboard'
import Analyze from '../pages/Analyze'
import AnalyzeList from '../pages/AnalyzeList'
import AnalyzeDetails from '../pages/AnalyzeDetails'
import WebAnalyze from '../pages/WebAnalyze'
import WebAnalyzeList from '../pages/WebAnalyzeList'
import WebAnalyzeDetails from '../pages/WebAnalyzeDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ForgotPassword from '../pages/ForgotPassword'

const routes: RouteObject[] = [
  {
    element: <Authenticated />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: 'analyze',
        element: <Analyze />,
        children: [
          {
            path: 'images',
            element: <Analyze />,
            children: [
              { path: '', element: <AnalyzeList /> },
              {
                path: ':id',
                element: <AnalyzeDetails />,
              },
            ],
          },
          {
            path: 'web',
            element: <WebAnalyze />,
            children: [
              { path: '', element: <WebAnalyzeList /> },
              {
                path: ':id',
                element: <WebAnalyzeDetails />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    element: <Unauthenticated />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
    ],
  },
]

export default routes
