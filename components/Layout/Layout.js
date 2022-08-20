import React from "react";
import Header from "./Header";
import Navbar from "./navbar/Navbar";

function Layout({ children }) {
   return (
      <>
         <Header />
         <Navbar />
         {children}
      </>
   );
}

export default Layout;
