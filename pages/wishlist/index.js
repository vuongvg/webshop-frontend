import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Breadcrumb from "../../components/BreadCrumb";
import SubscribeBox from "../../components/SubscribeBox";
import WishListItem from "../../components/UserDashboard/NavTabs/Tabs/WishList/WishListItem";
import UserContext from "../../store/userContext";

function WishList() {
   const user = useContext(UserContext);
   useEffect(() => {
      console.log(document.cookie);
   }, []);
   if (!user._id) return;
   return (
      <>
         <Head>
            <title>Wislist</title>
         </Head>
         <Breadcrumb title={"Wislist"} />

         {/* Cart Section Start */}
         <section className="wish-list-section section-b-space">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12 table-responsive">
                     <table className="table cart-table wishlist-table">
                        <thead>
                           <tr className="table-head">
                              <th scope="col">image</th>
                              <th scope="col">product name</th>
                              <th scope="col">price</th>
                              <th scope="col">availability</th>
                              <th scope="col">action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {user.wishList.length > 0 ? (
                              user.wishList.map((item, index) => <WishListItem key={index} item={item} />)
                           ) : (
                              <tr>
                                 <td colSpan={5}>
                                    <p className="alert alert-warning">Your wislist empty !!</p>
                                 </td>
                              </tr>
                           )}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </section>
         {/* Cart Section End */}

         <SubscribeBox />
      </>
   );
}

export default WishList;
