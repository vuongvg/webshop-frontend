/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Link from "next/link";

function InstagramSlider({ dataProduct }) {
   // const {  products, title, subtitle } = dataProduct;
   const products = dataProduct;
   const title = "InstagramSlider";
   const subtitle = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
   useEffect(() => {
      let instaSlider = $(".insta-slider").slick({
         dots: true,
         infinite: true,
         speed: 500,
         arrows: false,
         slidesToShow: 5,
          autoplay: 2000,
         slidesToScroll: 5,
         responsive: [
            {
               breakpoint: 1630,
               settings: {
                  slidesToShow: 4,
                  //   autoplay: 1000,
                  slidesToScroll: 4,
               },
            },
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 3,
                  //   autoplay: 1000,
                  slidesToScroll: 3,
               },
            },
            {
               breakpoint: 900,
               settings: {
                  slidesToShow: 2,
                  //   autoplay: 1000,
                  slidesToScroll: 2,
               },
            },
            {
               breakpoint: 576,
               settings: {
                  slidesToShow: 2,
                  //   autoplay: 1000,
                  slidesToScroll: 2,
               },
            },
            {
               breakpoint: 420,
               settings: {
                  slidesToShow: 1,
                  //   autoplay: 1000,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: "20px",
               },
            },
         ],
      });

      (function ($) {
         "use strict";
         $(".bg-top").parent().addClass("b-top");
         $(".bg-bottom").parent().addClass("b-bottom");
         $(".bg-center").parent().addClass("b-center");
         $(".bg-left").parent().addClass("b-left");
         $(".bg-right").parent().addClass("b-right");
         $(".bg_size_content").parent().addClass("b_size_content");
         $(".bg-img").parent().addClass("bg-size");
         $(".bg-img").parent().addClass("lazyload");
         $(".bg-img").each(function () {
            var el = $(this),
               src = el.attr("src"),
               parent = el.parent();

            parent.css({
               "background-image": "url(" + src + ")",
               "background-size": "cover",
               "background-position": "center",
               //    "background-position": "center top",
               "background-repeat": "no-repeat",
               display: "block",
            });
            $(".bg-img.lazyload.image-top").parent().css({ "background-position": "top" });
            $(".bg-img.lazyload.image-fit").parent().css({ "object-fit": "cover" });
            $(".bg-img.lazyload.image-bottom").parent().css({
               "background-position": "bottom",
            });
            // $(".bg-img.lazyload.image-fit").parent().css({
            //    "background-size": '50%',
            //    // 'width':'33%',
            //    "object-fit": "contain" ,
            //    "background-position": "left"
            //    // "background-repeat": "repeat",
            // });
            el.hide();
         });
      })(jQuery);
      feather.replace();

      return () => {
         instaSlider.slick("unslick");
      };
   }, []);

   return (
      <section className="ratio_square">
         <div className="container-fluid">
            <div className="row">
               <div className="col">
                  <div className="title title-2 text-center">
                     <h2>{title}</h2>
                     <h5 className="text-color">{subtitle}</h5>
                  </div>
                  <div className="product-style-1 instagram-2 product-wrapper">
                     <div className="insta-slider instagram-wrap">
                        {products.map((item, index) => (
                           <div key={index}>
                              <div className="product-box">
                                 <div className="img-wrapper">
                                    {/* <div className="top-wishlist product-color">
                                                    <a className="heart-wishlist heart-color ms-auto">
                                                        <i className="far fa-heart"></i>
                                                    </a>
                                                </div> */}
                                    <div className="share share-box share-opacity">
                                       <span className="share-plus share-plus-color">+</span>
                                       <span>Product new</span>
                                    </div>
                                    <Link href={"/product/" + item.slug}>
                                       <a className="text-center">
                                          {/* <img
                                                            src={item.image}
                                                            className="bg-img blur-up lazyload"
                                                            alt={item.name}
                                                        /> */}
                                          <img src={item.front_image.src} className="bg-img lazyload image-top" alt={item.name} />
                                       </a>
                                    </Link>
                                 </div>

                                 <div className="insta-hover insta-spacing text-center">
                                    <div>
                                       <h5>New Product</h5>
                                       <h3 className="text-hide">{item.name}</h3>
                                       <Link href={"/product/" + item.slug}>
                                          <button type="button" className="btn btn-light-white">
                                             Shop now <i className="fas fa-chevron-right ms-2"></i>
                                          </button>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default InstagramSlider;
