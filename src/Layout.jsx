import React, { useState } from 'react'
import Nevbar from './component/Nevigation/Nevbar'
import { Footer } from './component/footer/Footer'
import { Outlet } from 'react-router-dom'


const Layout = () => {
   
    return (
        <>
        
            <div className="flex flex-col min-h-screen justify-between bg-[url('../public/pexels-hngstrm-1939485.jpg')] bg-cover bg-center bg-no-repeat opacity-100 flied -z-10">
      <Nevbar />

       <Outlet/>
       <Footer />
            </div>
            
        </>
    )
}

export default Layout;