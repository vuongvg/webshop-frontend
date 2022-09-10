import Link from "next/link";
import React from "react";
import MenuMain from "./menuRight/MenuMain";
import MenuRight from "./menuRight/MenuRight";
import SearchBar from "./searchBar/SearchBar";

function Navbar() {
   return (
      <>
         <div className="d-flex pt-2 bg-light fs-6">
            <div className="">
               <Link href="/">
                  <a className="mx-3">Home</a>
               </Link>
               <Link href="/product-category">
                  <a>All category</a>
               </Link>
               <Link href="/product-category/kids">
                  <a className="mx-3">Kids</a>
               </Link>
               <Link href="/product-category/women">
                  <a className="mx-3">Women</a>
               </Link>
               <Link href="/product-category/men">
                  <a className="mx-3">Men</a>
               </Link>
               <Link href="/product-category/dresses">
                  <a>Dresses</a>
               </Link>
               <Link href="/login">
                  <a className="mx-3">Login</a>
               </Link>
            </div>
         </div>
         {/* ############################################################# */}
         <header className="header-style-2" id="home">
            <div className="main-header navbar-searchbar">
               <div className="container-fluid-lg">
                  <div className="row">
                     <div className="col-lg-12">
                        <div className="main-menu">
                           {/* <MenuLeft />
                                    <a href="tel:01012341234" onClick="">call 01012341234</a>
                                    <MainMenu />

                                    <MenuRight />
 
                                    <SearchBar /> */}
                           <div className="menu-left">
                              <div className="brand-logo">
                                 <Link href="/">
                                    <a>
                                       <svg className="svg-icon">
                                          <use className="fill-color" xlinkHref="/svg/icons.svg#logo"></use>
                                       </svg>
                                       <img src="/images/logo.png" className="img-fluid  lazyload" alt="logo" />
                                    </a>
                                 </Link>
                              </div>
                           </div>
                           <MenuMain />

                           <MenuRight />
                           <SearchBar/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>
   );
}

export default Navbar;
