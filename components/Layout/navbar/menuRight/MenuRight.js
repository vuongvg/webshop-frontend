/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { BsBell } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { deleteCookie } from "cookies-next";
import { fetchApiLogout } from "../../../../common/fetchApi";
import UserContext from "../../../../store/userContext";
import { setCookie } from "cookies-next";
import CartDropdown from "./CartDropdown";

function MenuRight() {
   const [isLogin, setIsLogin] = useState(false);
   const router = useRouter();
   const user = useContext(UserContext);
   useEffect(() => {
      if (user?._id) {
         setIsLogin(true);
         setCookie("login", true,{maxAge:300});
      } else {
         setIsLogin(false);
         // deleteCookie("login");
      }
   }, [user._id]);

   const handleLogout = () => {
      const refreshToken = localStorage.getItem("refreshToken");
      fetchApiLogout(refreshToken)
         .then((res) => {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            deleteCookie("login");
            router.push("/login");
         })
         .catch((err) => console.log(err));
   };
   const handleOpenSearchBar = () => {
      document.getElementById("search-full").classList.add("open");
      document.getElementById("input-search").focus();
   };
   return (
      <div className="menu-right">
         <ul>
            <li>
               <div className="search-box" onClick={handleOpenSearchBar}>
                  <BsSearch fontSize={20} />
               </div>
            </li>
            <li className="btn-notifi">
               {/* <PopoverNotificationCenter
                onNotificationClick={onNotificationClick}
          >
                {({ unseenCount }) => (
                   <NotificationBell unseenCount={unseenCount} />
                )}
          </PopoverNotificationCenter> */}
               <BsBell fontSize={20} />
            </li>
            <li className="onhover-dropdown">
               <div className="cart-media">
                  {isLogin ? (
                     <span className="avatar">
                        {/* <img src={isLogin ? "" : ""} alt="" /> */}
                        <FiUser fontSize={20} />
                     </span>
                  ) : (
                     <FiUser fontSize={20} />
                  )}
                  <span className="ms-1">{/* {cookie !== null ? user.username : ''} */}</span>
               </div>
               <div className="onhover-div profile-dropdown">
                  <ul>
                     {isLogin ? (
                        <>
                           <li>
                              <Link href="/user-dashboard">
                                 <a className="d-block">My account</a>
                              </Link>
                           </li>
                           <li>
                              <a className="d-block" onClick={handleLogout}>
                                 Logout
                              </a>
                           </li>
                        </>
                     ) : (
                        <>
                           <li>
                              <Link href="/login">
                                 <a className="d-block">Login</a>
                              </Link>
                           </li>
                           <li>
                              <Link href="/register">
                                 <a className="d-block">Register</a>
                              </Link>
                           </li>
                        </>
                     )}
                  </ul>
               </div>
            </li>
            <li className="onhover-dropdown wislist-dropdown">
               {/* <WishList /> */}
               <div className="cart-media">
                  <Link href="/wishlist">
                     <a>
                        <BsHeart fontSize={20} />
                        <span className="label label-theme rounded-pill">{user?.wishList?.length}</span>
                     </a>
                  </Link>
               </div>
            </li>
            <CartDropdown />
         </ul>
      </div>
   );
}

export default MenuRight;
