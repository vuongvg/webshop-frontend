/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-sync-scripts */
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import "react-toastify/dist/ReactToastify.css";
import "../styles/vendors/bootstrap.css";
import "../styles/vendors/font-awesome.css";
import "../styles/vendors/feather-icon.css";
import "../styles/vendors/animate.css";
import "../styles/vendors/slick/slick.css";
import "../styles/vendors/slick/slick-theme.css";
import "../styles/globals.css";
import "../styles/compare.css";
import "../styles/product-card.css";
import UserContext from "../store/userContext";
import { fetchApiGetUser, fetchApiUpdateUserByAddresslist, fetchApiUpdateUserByCartlist } from "../common/fetchApi";

function MyApp({ Component, pageProps }) {
   const [user, setUser] = useState({});
   useEffect(() => {
      const token = localStorage.getItem("token");
      token
         ? fetchApiGetUser()
              .then((result) => {
                 setUser({
                    ...result,

                    async handleWishList(item) {
                       if (this.wishList.find(({ _id }) => _id === item._id)) {
                          setUser((prev) => ({ ...prev, wishList: prev.wishList.filter(({ _id }) => _id !== item._id) }));
                       } else {
                          setUser((prev) => ({ ...prev, wishList: [item].concat(prev.wishList) }));
                       }
                    },
                    async handleCartList(item) {
                       const entry = this.cartList.find(({ _id, size, color }) => _id === item._id && size === item.size && color === item.color)
                          ? this.cartList.map((cart) =>
                               cart._id === item._id && cart.size === item.size && cart.color === item.color
                                  ? { ...cart, qty: item.qty + cart.qty }
                                  : cart
                            )
                          : [item].concat(this.cartList);
                       setUser((prev) => ({ ...prev, cartList: entry }));
                       return await fetchApiUpdateUserByCartlist(this._id, { cartList: entry });
                    },
                    async handleUpdateCartList(item, newQty) {
                       const entry = this.cartList.find(({ _id, size, color }) => _id === item._id && size === item.size && color === item.color)
                          ? this.cartList.map((cart) =>
                               cart._id === item._id && cart.size === item.size && cart.color === item.color ? { ...cart, qty: newQty } : cart
                            )
                          : [item].concat(this.cartList);
                       setUser((prev) => ({ ...prev, cartList: entry }));
                       return await fetchApiUpdateUserByCartlist(this._id, { cartList: entry });
                    },
                    async handleRemoveProductCart(id, size, color) {
                       const entry = this.cartList.filter((cart) => {
                          return !(cart._id === id && cart.size === size && cart.color === color);
                       });
                       setUser((prev) => ({ ...prev, cartList: entry }));
                       return await fetchApiUpdateUserByCartlist(this._id, { cartList: entry });
                    },
                    async handleRemoveAllCartList() {
                       setUser((prev) => ({ ...prev, cartList: [] }));
                       return await fetchApiUpdateUserByCartlist(this._id, { cartList: [] });
                    },
                    async handleAddAddress(item) {
                       const entry = this.addressList.concat(item);
                       setUser((prev) => ({ ...prev, addressList: entry }));
                       return await fetchApiUpdateUserByAddresslist(this._id, { addressList: entry });
                    },
                    async handleEditAddress(item) {
                       const entry = this.addressList.map((address) => (address._id === item._id ? item : address));
                       setUser((prev) => ({ ...prev, addressList: entry }));
                       return await fetchApiUpdateUserByAddresslist(this._id, { addressList: entry });
                    },
                    async handleRemoveAddress(id) {
                       const entry = this.addressList.filter((address) => address._id !== id);
                       setUser((prev) => ({ ...prev, addressList: entry }));
                       return await fetchApiUpdateUserByAddresslist(this._id, { addressList: entry });
                    },
                    async handleAddOrder(item) {
                       const entry = this.orderList.concat(item);
                       setUser((prev) => ({ ...prev, orderList: [entry].concat(prev.orderList) }));
                       return await fetchApiUpdateUserByOrderlist(this._id, { orderList: entry });
                    },
                    logout() {
                       setUser({});
                    },
                    login(user) {
                       setUser((prev) => ({ ...prev, ...user }));
                    },
                 });
              })
              .finally(
                 setUser({
                    login(user) {
                       setUser((prev) => ({ ...prev, ...user }));
                    },
                 })
              )
         : setUser({
              login(user) {
                 setUser((prev) => ({ ...prev, ...user }));
              },
           });
   }, []);
   useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
   }, []);

   return (
      <UserContext.Provider value={user}>
         <Layout>
            <Component {...pageProps} />
         </Layout>
         <Script src="/js/ion.rangeSlider.min.js"></Script>
         {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css" /> */}
         {/* <Script src="/js/jquery-3.5.1.min.js"></Script> */}
      </UserContext.Provider>
   );
}

export default MyApp;
