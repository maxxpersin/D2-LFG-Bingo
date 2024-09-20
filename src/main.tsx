import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import RaidList from './components/RaidList';
import { routes } from './shared/constants/Routes';

const router = createBrowserRouter([
  {
    path: "/d2-lfg-bingo",
    element: <App />,
    children: [
      { // Surely theres a better way to do this
        path: "",
        element: <Navigate to={routes.home} />
      },
      {
        path: routes.home,
        element: <RaidList />,
        index: true
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to={routes.home} />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
