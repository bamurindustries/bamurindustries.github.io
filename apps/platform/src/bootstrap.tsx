import * as ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AboutUs from './app/about-us/about-us';
import Main from './app/components/main/main';
import Products from './app/products/products';
import RootLayout from './app/routes/RootLayout';
import { StrictMode } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/about',
        element: <AboutUs />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>
);
