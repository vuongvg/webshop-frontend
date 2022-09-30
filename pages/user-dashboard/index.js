/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useContext, useEffect, useState } from "react";
import { fetchApiGetUser } from "../../common/fetchApi";
import Breadcrumb from "../../components/BreadCrumb";
import SubscribeBox from "../../components/SubscribeBox";
import NavTabs from "../../components/UserDashboard/NavTabs/NavTabs";

function UserDashboard() {
   return (
      <Fragment>
         <Head>
            <title>User Dashboard</title>
         </Head>
         <Breadcrumb title={"User Dashboard"}></Breadcrumb>
         <NavTabs />
         <SubscribeBox />
      </Fragment>
   );
}

export default UserDashboard;
