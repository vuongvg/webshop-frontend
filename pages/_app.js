/* eslint-disable @next/next/no-sync-scripts */
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "../styles/product.card.css";

function MyApp({ Component, pageProps }) {
   useEffect(() => {
      import("bootstrap/dist/js/bootstrap");
   }, []);

   return (
      <>
         <Layout>
            <Component {...pageProps} />
         </Layout>
         <script src="/js/ion.rangeSlider.min.js"></script>
      </>
   );
}

export default MyApp;
