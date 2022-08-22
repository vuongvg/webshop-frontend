import Link from "next/link";
import React, { useEffect } from "react";
import RatingDetails from "./RatingDetails";


function ProductCard({
   id,
   price,
   slug,
   name,
   categories,
   regular_price,
   average_rating,
   on_sale,
   featured,
   back_image,
   front_image,
   acf = {},
   short_description,
   disAction,
   images,
   tags,
   attributes,
   stock_status,
   discount,
   rating_count,
   rating,
}) {
   useEffect(() => {
      feather.replace();
   }, []);

   return (
      <div>
         <div className="product-box">
            <div className="img-wrapper">
               <div className="front">
                  <Link href={"/product/" + slug} passHref>
                     <a>
                        <img src={front_image || acf.front_image} className="bg-img lazyload" alt="" />
                     </a>
                  </Link>
               </div>
               <div className="back">
                  <Link href={"/product/" + slug} passHref>
                     <a>
                        <img src={back_image || acf.back_image} className="bg-img lazyload" alt="" />
                     </a>
                  </Link>
               </div>
               <div className="label-block" hidden={!featured && !on_sale}>
                  {featured && <span className="label label-black">New</span>}
                  {on_sale && <span className="label label-theme">{discount} % OFF</span>}
               </div>
               <div
                  // hidden={disAction}
                  className="cart-wrap"
               >
                  <ul>
                     <li>
                        <a
                           data-bs-toggle="modal"
                           data-bs-target="#quick-view"
                           data-product={JSON.stringify({
                              images,
                              name,
                              slug,
                              price,
                              regular_price,
                              on_sale,
                              categories,
                              average_rating,
                              tags,
                              attributes,
                              short_description,
                              acf,
                           })}
                        >
                           <i data-feather="eye"></i>
                        </a>
                     </li>
                     <li>
                        <a>
                           {/* <AddCompare inCard item={props} /> */}
                           <i data-feather="refresh-cw"></i>
                        </a>
                     </li>
                     <li>
                        <a
                        // onClick={addWislistHandle} className={`wishlist ${productLikedState.ids.includes(id) ? "liked" : ""}`}
                        >
                           <i data-feather="heart"></i>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="product-details">
               <div className="rating-details">
                  <Link href={"/product-category/" + categories[0].slug}>
                     <a className="font-light grid-content">{categories[0].name}</a>
                  </Link>
                  <RatingDetails average_rating={rating} rating_count={rating_count} showNum />
               </div>
               <div className="main-price ">
                  <Link href={"/product/" + slug}>
                     <a role="button" className="font-default">
                        <h5
                        // dangerouslySetInnerHTML={{__html:name}}
                        >
                           {name}
                        </h5>
                     </a>
                  </Link>
                  {/* <div className="listing-content">
                     <span className="font-light">Jacket</span>
                     <p
                        className="font-light"
                        dangerouslySetInnerHTML={{
                           __html: short_description,
                        }}
                     ></p>
                  </div> */}
                  <h5 className="theme-color">${price}</h5>
                  {/* <button className="btn listing-content">Add To Cart</button> */}
               </div>
            </div>
            {/* {props.children} */}
            <div className="" id="footer-card"></div>
         </div>
      </div>
   );
}

export default ProductCard;
