/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import Link from "next/link";
// import { trimHTML } from '../../utils/const';

export default function SliderItemShoe({ slideData }) {
   const { product_data: product, slide_data } = slideData;
   console.log(`  ~ product`, product)
   return (
      <div>
         <div className="banner-poster">
            <div className="slider-right-detail">
               <div className="labels">
                  <ul className="label-15">
                     <li>
                        <a href="https://www.facebook.com/">
                           <img src="/images/social-icon/1.png" className="img-fluid  lazyload" alt="facebook" />
                           <h5 className="d-lg-block d-none">Facebook</h5>
                        </a>
                     </li>
                     <li>
                        <a href="https://www.instagram.com/">
                           <img src="/images/social-icon/2.png" className="img-fluid  lazyload" alt="Instagram" />
                           <h5 className="d-lg-block d-none">Instagram</h5>
                        </a>
                     </li>
                     <li>
                        <a href="https://twitter.com/">
                           <img src="/images/social-icon/3.png" className="img-fluid  lazyload" alt="Twitter" />
                           <h5 className="d-lg-block d-none">Twitter</h5>
                        </a>
                     </li>
                  </ul>
               </div>
               <h4>Lorem ipsum dolor sit,</h4>
               {/* <h4>{slide_data.subtitle_2}</h4> */}
               {1 ? (
                  // {product.on_sale ? (
                  <div className="offer-box">
                     <h6>
                        {/* {(
                                    (product.price / product.regular_price) *
                                    100
                                ).toFixed(0)} */}
                        44 % off
                     </h6>
                  </div>
               ) : (
                  <></>
               )}
            </div>

            <div className="slider-bg">
               <div className="bg-text">
                  <span>Lorem ipsum </span>
                  {/* <span>{slide_data.text_background}</span> */}
               </div>

               <div className="bg-circle gradient-purple"></div>
               <img
                  // src={'https://image.thanhnien.vn/w1024/Uploaded/2022/tnabtw/2021_12_09/ta03-7305.jpg'}
                  // src={slide_data.background}
                  src={product.front_image.src}
                  className="shoes-1 img-fluid  lazyload"
                  alt=""
               />
            </div>

            <div className="sugestion-product d-xl-block d-none">
               <h3>Lorem, ipsum dolor.</h3>
               <h6>Lorem ipsum dolor sit.</h6>
               {/* <h3>{slide_data.title}</h3>
                    <h6>{slide_data.subtitle}</h6> */}
            </div>

            <div className="price-number">
               <h2>
                  {1 ? (
                     // {product.on_sale ? (
                     <Fragment>
                        {/* ${product.price}{" "} */}
                        ${33}
                        <span className="theme-color">
                           {/* <del>${product.regular_price}</del> */}
                           <del>${55}</del>
                        </span>
                     </Fragment>
                  ) : (
                     `$${product.price}`
                     `$33`
                  )}
               </h2>
               <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut unde consequatur repellendus.</h6>
               {/* <h6>{trimHTML(product.short_description)}</h6> */}
            </div>

            <div className="slider-arrow-2">
               <div className="left-arrow d-lg-block d-none"></div>
               <div className="right-arrow d-lg-block d-none"></div>
            </div>
         </div>
      </div>
   );
}
