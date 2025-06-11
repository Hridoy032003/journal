import { useState } from 'react'
import Layout from './Layout';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Routes/Home';
import JournalEntery from './Routes/JournalEntery';
import Dashboard from './Routes/Dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/writeContent", element: <JournalEntery /> },
        { path: "/dashboard", element: <Dashboard /> },
        
  
      ],
    },
 
  ]);

  return <RouterProvider router={router} />;
}

export default App;
