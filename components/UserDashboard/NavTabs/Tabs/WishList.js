import Skeleton from "react-loading-skeleton";
import WishListItem from "./WishList/WishListItem";
// import { useSelector } from 'react-redux';
// import WishListItem from './WishList/WishListItem';

function WishList({ user: { wishList } }) {

   return (
      <div className="tab-pane fade table-dashboard dashboard wish-list-section" id="wishlist">
         <div className="box-head mb-3">
            <h3>My Wishlist</h3>
         </div>
         <div className="table-responsive">
            <table className="table cart-table">
               <thead>
                  <tr className="table-head">
                     <th scope="col">image</th>
                     <th scope="col">Product Id</th>
                     <th scope="col">Product Details</th>
                     <th scope="col">Price</th>
                     <th scope="col">Action</th>
                  </tr>
               </thead>
               <tbody>
                  {wishList.length > 0 ? (
                     wishList.map((item, index) => <WishListItem key={index} item={item} />)
                  ) : (
                     <tr>
                        <td colSpan={5}>
                           <p className="alert alert-warning">No product in wishlist</p>
                        </td>
                     </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>
   );
}

export default WishList;
