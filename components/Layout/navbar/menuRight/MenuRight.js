import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsBell } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

function MenuRight() {
   const [isLogin, setIsLogin] = useState(null);
   const router = useRouter();
   useEffect(() => {
      const token = localStorage.getItem("token");
      setIsLogin(token);
   }, [router.pathname]);

   const handleLogout=()=>{
      localStorage.removeItem("token")
      router.push('/login')
   }
   return (
      <div className="menu-right">
         <ul>
            <li>
               <div className="search-box">
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
                              <Link href="/user">
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
                        <span className="label label-theme rounded-pill">0{/* {productLikedState.ids.length} */}</span>
                     </a>
                  </Link>
               </div>
            </li>
            <li className="onhover-dropdown cart-dropdown">
               {/* <SmallCart /> */}
               <>
                  <button type="button" className="btn btn-solid-default btn-spacing">
                     <i data-feather="shopping-cart" className="pe-2"></i>
                     <span>$5686.25</span>
                  </button>
                  <div className="onhover-div">
                     <div className="cart-menu">
                        <div className="cart-title">
                           <h6>
                              <i data-feather="shopping-bag"></i>
                              <FiShoppingBag fontSize={20} />
                              <span className="label label-theme rounded-pill">5</span>
                           </h6>
                           <span className="d-md-none d-block">
                              <i className="fas fa-arrow-right back-cart"></i>
                           </span>
                        </div>
                        <ul className="custom-scroll">
                           <li>
                              <div className="media">
                                 <img src="/images/fashion/product/front/1.jpg" className="img-fluid blur-up lazyload" alt="" />
                                 <div className="media-body">
                                    <h6>Slim Fit Plastic Coat</h6>
                                    <div className="qty-with-price">
                                       <span>$78.00</span>
                                       <span>
                                          <input type="number" className="form-control" defaultValue="1" />
                                       </span>
                                    </div>
                                 </div>
                                 <button type="button" className="btn-close d-block d-md-none" aria-label="Close">
                                    <i className="fas fa-times"></i>
                                 </button>
                              </div>
                           </li>
                           <li>
                              <div className="media">
                                 <img src="/images/fashion/product/front/7.jpg" className="img-fluid blur-up lazyload" alt="" />
                                 <div className="media-body">
                                    <h6>Womens Stylish Jacket</h6>
                                    <div className="qty-with-price">
                                       <span>$24.00</span>
                                       <span>
                                          <input type="number" className="form-control" defaultValue="1" />
                                       </span>
                                    </div>
                                 </div>
                                 <button type="button" className="btn-close d-block d-md-none" aria-label="Close">
                                    <i className="fas fa-times"></i>
                                 </button>
                              </div>
                           </li>
                        </ul>
                     </div>
                     <div className="cart-btn">
                        <h6 className="cart-total">
                           <span className="font-light">Total:</span> $ 542.00
                        </h6>
                        <Link href="/cart">
                           <button type="button" className="btn btn-solid-default btn-block">
                              Proceed to payment
                           </button>
                        </Link>
                     </div>
                  </div>
               </>
            </li>
         </ul>
      </div>
   );
}

export default MenuRight;
