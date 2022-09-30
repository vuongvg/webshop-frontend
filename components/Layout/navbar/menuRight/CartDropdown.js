/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { amount } from "../../../../common";
import UserContext from "../../../../store/userContext";

function CartDropdown() {
   const { cartList } = useContext(UserContext);
   
   return (
      <li className="onhover-dropdown cart-dropdown">
         {/* <SmallCart /> */}
         {cartList && (
            <>
               <button type="button" className="btn btn-solid-default btn-spacing">
                  <i data-feather="shopping-cart" className="pe-2"></i>
                  <span>$ {amount(cartList)}</span>
               </button>
               <div className="onhover-div">
                  <div className="cart-menu">
                     <div className="cart-title">
                        <h6>
                           <i data-feather="shopping-bag"></i>
                           <FiShoppingBag fontSize={20} />
                           <span className="label label-theme rounded-pill">{cartList.length}</span>
                        </h6>
                        <span className="d-md-none d-block">
                           <i className="fas fa-arrow-right back-cart"></i>
                        </span>
                     </div>
                     <ul className="custom-scroll">
                        {cartList.map(({ image, name, price, qty, slug, _id, size, color }, index) => (
                           <li key={index}>
                              <div className="media">
                                 <img src={image} className="img-fluid  lazyload" alt="" />
                                 <div className="media-body">
                                    <h6>{name}</h6>
                                    <div className="qty-with-price">
                                       <span>${price}</span>
                                       <span>
                                          <input type="number" className="form-control" defaultValue={qty} />
                                       </span>
                                    </div>
                                 </div>
                                 <button type="button" className="btn-close d-block d-md-none" aria-label="Close">
                                    <i className="fas fa-times"></i>
                                 </button>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="cart-btn">
                     <h6 className="cart-total">
                        <span className="font-light">Total:</span> $ {amount(cartList)}
                     </h6>
                     <Link href="/cart">
                        <button type="button" className="btn btn-solid-default btn-block">
                           Proceed to payment
                        </button>
                     </Link>
                  </div>
               </div>
            </>
         )}
      </li>
   );
}

export default CartDropdown;
