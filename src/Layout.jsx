import { ThemeProvider } from "./components/theme-provider"
import Nevbar from "./components/Nevigation/Nevbar";

import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
   
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        
        <div className="flex flex-col min-h-screen  bg-cover bg-center bg-no-repeat opacity-100 flied -z-10">
         
          <Nevbar />
        
          <Outlet />
    
        </div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
