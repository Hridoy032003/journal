import { useState } from 'react'
import Layout from './Layout';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Routes/Home';
import JournalEntery from './Routes/JournalEntery';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/writeContent", element: <JournalEntery /> },
        
  
      ],
    },
 
  ]);

  return <RouterProvider router={router} />;
}

export default App;
