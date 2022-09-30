import React from "react";
import { ToastContainer, Slide } from "react-toastify";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./navbar/Navbar";

function Layout({ children }) {
   return (
      <>
         <Header />
         <Navbar />
         {children}
         <Footer />
         <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Slide}
         />
      </>
   );
}

export default Layout;
