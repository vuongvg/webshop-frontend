// import React from 'react'

import Head from "next/head";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { amount, toastSuccess } from "../../common";
import Breadcrumb from "../../components/BreadCrumb";
import CartTableItem from "../../components/Cart/CartTableItem";
import SubscribeBox from "../../components/SubscribeBox";
import UserContext from "../../store/userContext";

function Cart() {
   const inputCouponRef = useRef();
   const [loading, setLoading] = useState(false);
   const [couponError, setCouponError] = useState("");
   const user = useContext(UserContext);
   const { cartList } = user;

   const handleRemoveAll = () => {
      user.handleRemoveAllCartList();
   };

   return (
      <>
         <Head>
            <title>Cart</title>
         </Head>
         <Breadcrumb title={"Shopping Cart"} />

         {/* Cart Section Start */}
         <section className="cart-section section-b-space">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12 table-responsive mt-4">
                     <table className="table cart-table">
                        <thead>
                           <tr className="table-head">
                              <th scope="col">image</th>
                              <th scope="col">product name</th>
                              <th scope="col">price</th>
                              <th scope="col">quantity</th>
                              <th scope="col">action</th>
                              <th scope="col">total</th>
                           </tr>
                        </thead>
                        <tbody>
                           {cartList?.length === 0 ? (
                              <tr>
                                 <td colSpan={6}>
                                    <p className="alert alert-warning w-100">No products in cart.</p>
                                 </td>
                              </tr>
                           ) : (
                              cartList?.map((item, index) => <CartTableItem key={index} data={item} />)
                           )}
                        </tbody>
                     </table>
                  </div>

                  <div className="col-12 mt-md-5 mt-4">
                     <div className="row">
                        <div className="col-sm-7 col-5 order-1">
                           <div className="left-side-button text-end d-flex d-block justify-content-end">
                              <a onClick={handleRemoveAll} className="text-decoration-underline btn-remove-all theme-color d-block text-capitalize">
                                 clear all items
                              </a>
                           </div>
                        </div>
                        <div className="col-sm-5 col-7">
                           <div className="left-side-button float-start">
                              <Link href={"/product-category"}>
                                 <a className="btn btn-solid-default btn fw-bold mb-0 ms-0">
                                    <i className="fas fa-arrow-left"></i> Continue Shopping
                                 </a>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="cart-checkout-section">
                     <div className="row g-4">
                        <div className="col-lg-4 col-sm-6">
                           <div className="promo-section"></div>
                        </div>

                        <div className="col-lg-4 col-sm-6 ">
                           <div className="checkout-button">
                              <Link href={"/checkout"}>
                                 <a className="btn btn-solid-default btn fw-bold">
                                    Check Out <i className="fas fa-arrow-right ms-1"></i>
                                 </a>
                              </Link>
                           </div>
                        </div>

                        <div className="col-lg-4">
                           <div className="cart-box">
                              <div className="cart-box-details">
                                 <div className="total-details">
                                    <div className="top-details">
                                       <h3>Cart Totals</h3>
                                       <h6>
                                          Subtotal <span>$ {amount(cartList)}</span>
                                       </h6>
                                       <h6>
                                          Total <span className="text-success">$ {amount(cartList)}</span>
                                       </h6>
                                    </div>
                                    <div className="bottom-details">
                                       <Link href={"/checkout"}>
                                          <a>Process Checkout</a>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Cart Section End */}

         <SubscribeBox />
      </>
   );
}

export default Cart;
