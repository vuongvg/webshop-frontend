/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React, { useEffect } from "react";
import Breadcrumb from "../../components/BreadCrumb";
import SubscribeBox from "../../components/SubscribeBox";

export default function AboutUs() {
   return (
      <>
         <Head>
            <title>About Us</title>
         </Head>
         <Breadcrumb title={"About Us"} />
         {/* team leader section Start */}
         <section className="overflow-hidden">
            <div className="container">
               <div className="row g-5">
                  <div className="col-xl-5 offset-xl-1">
                     <div className="row g-3">
                        <div className="col-md-6">
                           <img src="/images/inner-page/review-image/6.jpg" className="img-fluid rounded-3 about-image" alt="" />
                        </div>
                        <div className="col-md-6">
                           <img src="/images/inner-page/review-image/7.jpg" className="img-fluid rounded-3 about-image" alt="" />
                        </div>
                        <div className="col-12 ratio_40">
                           <div>
                              <img src="/images/inner-page/review-image/8.jpg" className="img-fluid rounded-3 team-image bg-img" alt="" />
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-5">
                     <div className="about-details">
                        <div>
                           <h2>WHO WE ARE</h2>
                           <h3>largest Online fashion destination</h3>
                           <p>
                              As a brand that sells loungewear, Voxo puts craftsmanship at the forefront of what makes it different. One of the best
                              ways to use your About Us page is to illustrate your brand’s value proposition.
                           </p>
                           <p>
                              Voxo uses a series of pictures, options of the product to showcase its careful approach to detail, construction, and
                              quality. This goes along with the “show don’t tell” strategy that can make an About Us page so powerful
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* team leader section End */}

         {/* service section start */}
         <section className="service-section about-page service-style-2 section-b-space">
            <div className="container">
               <div className="row g-4 g-sm-3">
                  <div className="col-xl-3 col-sm-6">
                     <div className="service-wrap">
                        <div className="service-icon">
                           <svg>
                              <use xlinkHref="/svg/icons.svg#customer"></use>
                           </svg>
                        </div>
                        <div className="service-content">
                           <h3 className="mb-2">Customer Servcies</h3>
                           <span className="font-light">Top notch customer service.</span>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-3 col-sm-6">
                     <div className="service-wrap">
                        <div className="service-icon">
                           <svg>
                              <use xlinkHref="/svg/icons.svg#shop"></use>
                           </svg>
                        </div>
                        <div className="service-content">
                           <h3 className="mb-2">Pickup At Any Store</h3>
                           <span className="font-light">Free shipping on orders over $65.</span>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-3 col-sm-6">
                     <div className="service-wrap">
                        <div className="service-icon">
                           <svg>
                              <use xlinkHref="/svg/icons.svg#secure-payment"></use>
                           </svg>
                        </div>
                        <div className="service-content">
                           <h3 className="mb-2">Secured Payment</h3>
                           <span className="font-light">We accept all major credit cards.</span>
                        </div>
                     </div>
                  </div>

                  <div className="col-xl-3 col-sm-6">
                     <div className="service-wrap">
                        <div className="service-icon">
                           <svg>
                              <use xlinkHref="/svg/icons.svg#return"></use>
                           </svg>
                        </div>
                        <div className="service-content">
                           <h3 className="mb-2">Free Returns</h3>
                           <span className="font-light">30-days free return policy.</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <SubscribeBox />
      </>
   );
}
