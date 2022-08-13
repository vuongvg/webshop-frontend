import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
   return (
      <Html>
         <Head>
            <link
               rel="stylesheet"
               href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
               integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
               crossOrigin="anonymous"
               referrerpolicy="no-referrer"
            />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
         </Head>
         <body>
            <Main />
            <NextScript />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css" />
            <script src="/js/jquery-3.5.1.min.js" async></script>
            <script src="https://unpkg.com/feather-icons" async></script>
         </body>
      </Html>
   );
}
