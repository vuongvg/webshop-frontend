/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect } from "react";

function BannerProductCategoryGrid({ dataBannerProduct }) {
   useEffect(() => {
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
               "background-repeat": "no-repeat",
               display: "block",
            });

            el.hide();
         });
      })(jQuery);
      feather.replace();
   }, []);

   return (
      <section className="banner-style-2 offer-banner">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="title title-2 text-center">
                     {/* <h2>{dataBannerProduct.title}</h2>
                     <h5 className="text-color">{dataBannerProduct.subtitle}</h5> */}
                     <h2>New Offers</h2>
                     <h5 className="text-color">Just For You</h5>
                  </div>
               </div>
            </div>
            <div className="row gy-4">
               <div className="col-lg-6 ratio2_1">
                  <Link
                     href={
                        "/product-category/" + dataBannerProduct[7].slug
                        // dataBannerProduct.list[0].link.slug
                     }
                  >
                     <div className="collection-banner p-right text-right">
                        <div className="banner-img">
                           <img
                              // src={dataBannerProduct.list[0].background_image}
                              src={dataBannerProduct[7].image.src}
                              className="bg-img lazyload "
                              // alt={dataBannerProduct.list[0].link.name}
                           />
                        </div>

                        <div className="banner-text">
                           <div className="banner-content ">
                              {/* <span
                                 className="span-top"
                                 dangerouslySetInnerHTML={{
                                    __html: dataBannerProduct.list[0].sub_title,
                                 }}
                              ></span> */}
                              {/* <span
                                 className="span-top"
                                 dangerouslySetInnerHTML={{
                                    // __html: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                                    __html: "New " + dataBannerProduct[7].name,
                                    
                                 }}
                              ></span> */}
                              <h2
                                 style={{ "textShadow": "-0.6px 0 #bbb, 0 0.6px #bbb, 0.6px 0 #bbb, 0 -0.6px #bbb" }}
                                 dangerouslySetInnerHTML={{
                                    // __html: dataBannerProduct.list[0].title,
                                    __html: "New " + dataBannerProduct[7].name,
                                 }}
                              ></h2>
                              <button type="button" className="btn btn-solid-default">
                                 Shop Now
                              </button>
                           </div>
                        </div>
                     </div>
                  </Link>
               </div>
               <div className="col-lg-6">
                  <div className="row gy-4">
                     <div className="col-lg-12 ratio_40">
                        <Link
                           href={
                              "/product-category/" + dataBannerProduct[6].slug
                              // dataBannerProduct.list[1].link.slug
                           }
                        >
                           <div className="collection-banner p-left banner-title">
                              <div className="banner-img">
                                 <img
                                    // src={dataBannerProduct.list[1].background_image}
                                    src={dataBannerProduct[6].image.src}
                                    className="bg-img lazyload "
                                    // alt={dataBannerProduct.list[1].name}
                                 />
                              </div>
                              <div className="banner-text">
                                 <div className="banner-content ">
                                    {/* <h3
                                       className="h-bottom"
                                       dangerouslySetInnerHTML={{
                                          __html: dataBannerProduct.list[1].title,
                                       }}
                                    ></h3> */}

                                    <h3
                                       style={{ "textShadow": "-0.6px 0 #bbb, 0 0.6px #bbb, 0.6px 0 #bbb, 0 -0.6px #bbb" }}
                                       dangerouslySetInnerHTML={{
                                          __html: "New " + dataBannerProduct[6].name,
                                       }}
                                    ></h3>

                                    <Link
                                       href={"/product-category/" + dataBannerProduct[6].slug} //  dataBannerProduct.list[1].link.slug}
                                    >
                                       <button type="button" className="btn btn-solid-default">
                                          Shop Now
                                       </button>
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </Link>
                     </div>
                     <div className="col-sm-6 ratio2_3">
                        <div className="collection-banner p-center text-center">
                           <div className="banner-img">
                              {/* <img
                                 src={dataBannerProduct.list[2].background_image}
                                 className="bg-img blur-up lazyload"
                                 alt={dataBannerProduct.list[2].link.name}
                              /> */}
                              <img src={dataBannerProduct[5].image.src} className="bg-img lazyload image-top" />
                           </div>
                           <Link
                              href={
                                 "/product-category/" + dataBannerProduct[5].slug
                                 // dataBannerProduct.list[2].link.slug
                              }
                           >
                              <a className="contain-banner">
                                 <div className="banner-content with-bg">
                                    <h3 className="mb-1">New {dataBannerProduct[5].name}</h3>
                                    <span
                                       dangerouslySetInnerHTML={{
                                          // __html: dataBannerProduct.list[2].sub_title,
                                          __html: "Discount -70%",
                                       }}
                                    ></span>
                                 </div>
                              </a>
                           </Link>
                        </div>
                     </div>
                     <div className="col-sm-6 ratio2_3">
                        <div className="collection-banner p-center text-center">
                           <div className="banner-img">
                              {/* <img
                                 src={dataBannerProduct.list[3].background_image}
                                 className="bg-img blur-up lazyload"
                                 alt={dataBannerProduct.list[3].link.name}
                              /> */}
                              <img src={dataBannerProduct[4].image.src} className="bg-img lazyload image-top" />
                           </div>
                           <Link
                              href={"/product-category/" + dataBannerProduct[4].slug}
                              //  dataBannerProduct.list[3].link.slug}
                           >
                              <a className="contain-banner">
                                 <div className="banner-content with-bg">
                                    <h3 className="mb-1">New {dataBannerProduct[4].name}</h3>
                                    <span
                                       dangerouslySetInnerHTML={{
                                          // __html: dataBannerProduct.list[3].sub_title,
                                          __html: "Discount -70%",
                                       }}
                                    ></span>
                                 </div>
                              </a>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default BannerProductCategoryGrid;
