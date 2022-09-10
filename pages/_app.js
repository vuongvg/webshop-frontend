/* eslint-disable @next/next/no-sync-scripts */
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";

import "../styles/vendors/bootstrap.css";
import "../styles/vendors/font-awesome.css";
import "../styles/vendors/feather-icon.css";
import "../styles/vendors/animate.css";
// import "../styles/vendors/ion.rangeSlider.min.css";
import "../styles/vendors/slick/slick.css";
import "../styles/vendors/slick/slick-theme.css";
import "../styles/globals.css";
import "../styles/compare.css";
import "../styles/product-card.css";

function MyApp({ Component, pageProps }) {
   useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
   }, []);

   return (
      <>
         <Layout>
            <Component {...pageProps} />
         </Layout>
         <Script src="/js/ion.rangeSlider.min.js"></Script>
         {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css" /> */}
         {/* <Script src="/js/jquery-3.5.1.min.js"></Script> */}
      </>
   );
}

export default MyApp;
