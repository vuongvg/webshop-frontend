/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

function MenuMain() {
  return (
    <div className="main-navbar">
    <div id="mainnav">
       <div className="toggle-nav mx-3">
          <i className="fa fa-bars sidebar-bar"></i>
       </div>
       <ul className="nav-menu">
          <li className="back-btn d-xl-none">
             <div className="close-btn">
                Menu
                <span className="mobile-back">
                   <i className="fa fa-angle-left"></i>
                </span>
             </div>
          </li>
          <li>
             <Link href="/">
                <a className="nav-link menu-title">Home</a>
             </Link>
          </li>
          <li>
             <Link href="/product-category">
                <a className="nav-link menu-title">All categories</a>
             </Link>
          </li>
          <li>
             <Link href="/review">
                <a className="nav-link menu-title">Review</a>
             </Link>
          </li>
          {/* <li className="dropdown">
             <Link href="/blog">
                <a className="nav-link menu-title">blog</a>
             </Link>
             <ul className="nav-submenu menu-content">
                <li>
                   <Link href="/blog/category/business">
                      <a>Business</a>
                   </Link>
                </li>
                <li>
                   <Link href="/blog/category/entertainment">
                      <a>Entertainment</a>
                   </Link>
                </li>
                <li>
                   <Link href="/blog/category/global">
                      <a>Global</a>
                   </Link>
                </li>
                <li>
                   <Link href="/blog/category/health">
                      <a>Health</a>
                   </Link>
                </li>
                <li>
                   <Link href="/blog/category/sports">
                      <a>Sports</a>
                   </Link>
                </li>
             </ul>
          </li> */}
          <li>
             <Link href="/faq">
                <a className="nav-link menu-title">Faq</a>
             </Link>
          </li>
          <li>
             <Link href="/contact-us">
                <a className="nav-link menu-title">Contact us</a>
             </Link>
          </li>
          <li>
             <Link href="/about-us">
                <a className="nav-link menu-title">About us</a>
             </Link>
          </li>
          {/* <li className="mobile-poster d-flex d-xl-none">
             <img src="/images/pwa.png" className="img-fluid" alt="" />
             <div className="mobile-contain">
                <h5>Enjoy app-like experience</h5>
                <p className="font-light">With this Screen option you can use Website like an App.</p>
                <a href="undefined" id="installApp" className="btn btn-solid-default btn-spacing w-100">
                   ADD TO HOMESCREEN
                </a>
             </div>
          </li> */}
       </ul>
    </div>
 </div>
  )
}

export default MenuMain