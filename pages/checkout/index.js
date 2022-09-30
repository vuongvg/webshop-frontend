/* eslint-disable react/no-unescaped-entities */
//
import { useContext, useState } from "react";
import Link from "next/link";
import Breadcrumb from "../../components/BreadCrumb";
import SubscribeBox from "../../components/SubscribeBox";
import Head from "next/head";
import UserContext from "../../store/userContext";
import Formcheckout from "../../components/Checkout/Formcheckout";
import CartCheckoutItem from "../../components/Cart/CartCheckoutItem";
import { amount } from "../../common";

const initialAddress = {
   address_1: "",
   address_2: "",
   city: "",
   country: "",
   email: "",
   first_name: "",
   last_name: "",
   phone: "",
   postal_code: "",
   state: "",
};

function Checkout() {
   const [address, setAddress] = useState(initialAddress);
   const user = useContext(UserContext);
   const { cartList } = user;

   if (!cartList) return;
   return (
      <>
         <Head>
            <title>Check out</title>
         </Head>
         <Breadcrumb
            title={"Checkout"}
            bredcrumbList={[
               {
                  title: "Cart",
                  href: "/cart",
               },
            ]}
         />

         <section className="section-b-space">
            <div className="container">
               {cartList.length === 0 ? (
                  <p className="alert alert-warning">You don't have order to checkout</p>
               ) : (
                  // ) : !cookie ? (
                  //       <p className="alert alert-warning text-center">
                  //          You must{" "}
                  //          <Link href={"/login"}>
                  //             <a>login</a>
                  //          </Link>{" "}
                  //          to checkout
                  //       </p>
                  //    ) :
                  <div className="row g-4">
                     <div className="col-lg-8">
                        <div className="checkout-header d-flex justify-content-between align-items-center">
                           <h3 className="mb-3">Shipping address</h3>
                           <div className="select-address d-flex flex-column align-items-end">
                              <p className="mb-0">Your address</p>
                              {
                                 // isLoading || isFetching ? (
                                 // <Sekeleton width={100} />}
                                 <select
                                    onChange={(e) => {
                                       if (e.target.value === "-1") {
                                          setAddress(initialAddress);
                                          return;
                                       }

                                       setAddress({
                                          ...user.addressList[Number(e.target.value)],
                                       });
                                    }}
                                 >
                                    <option value="-1">Select address</option>
                                    {user.addressList.map((item, index) => (
                                       <option key={index} value={index}>
                                          {item.address_title}
                                       </option>
                                    ))}
                                 </select>
                              }
                           </div>
                        </div>

                        <Formcheckout data={address} cartList={cartList}/>
                     </div>

                     <div className="col-lg-4">
                        <div className="your-cart-box">
                           <h3 className="mb-3 d-flex text-capitalize">
                              Your cart
                              <span className="badge bg-theme new-badge rounded-pill ms-auto bg-dark">{cartList.length}</span>
                           </h3>

                           <ul className="list-group mb-3">
                              {cartList.map((item, index) => (
                                 <CartCheckoutItem key={index} data={item} />
                              ))}
                              <li className="list-group-item d-flex lh-condensed justify-content-between">
                                 <span className="fw-bold">Total</span>
                                 <strong>${amount(cartList)}</strong>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </section>

         <SubscribeBox />
      </>
   );
}

export default Checkout;
