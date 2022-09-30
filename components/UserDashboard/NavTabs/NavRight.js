/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { fetchApiGetUser } from "../../../common/fetchApi";
import UserContext from "../../../store/userContext";
import Dash from "./Tabs/Dash";
import Order from "./Tabs/Order";
import Pay from "./Tabs/Pay";
import Profile from "./Tabs/Profile";
import Save from "./Tabs/Save";
import Security from "./Tabs/Security";
import WishList from "./Tabs/WishList";

function NavRight() {
   const user = useContext(UserContext);
   if (!user._id) return;
   return (
      <div className="col-lg-9">
         <div className="filter-button dash-filter dashboard ">
            <button className="btn btn-solid-default btn-sm fw-bold filter-btn">Show Menu</button>
         </div>

         <div className="tab-content" id="myTabContent">
            {/* <div className="">user: {JSON.stringify(user)}</div> */}
            {/* <Dash /> */}

            <Order user={user} />

            <WishList user={user} />

            <Save user={user} />

            {/* <Pay /> */}

            {/* <Profile user={user}/> */}

            {/* <Security /> */}
         </div>
      </div>
   );
}

export default NavRight;
