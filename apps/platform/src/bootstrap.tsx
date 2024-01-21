import * as ReactDOM from 'react-dom/client';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Main from './app/components/main/main';
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
        // loader: postsLoader,
        // children: [
        //   { path: '/create-post', element: <NewPost />, action: newPostAction },
        //   { path: '/:postId', element: <PostDetails />, loader: postDetailsLoader }
        // ],
      },
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
