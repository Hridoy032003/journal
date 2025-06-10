import { useState } from 'react'
import Layout from './Layout';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Routes/Home/Home';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
  
      ],
    },
 
  ]);

  return <RouterProvider router={router} />;
}

export default App;
