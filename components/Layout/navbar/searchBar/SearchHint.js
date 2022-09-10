/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import RatingDetails from "../../../RatingDetails";

function SearchHint({ dataHint }) {
   console.log(`  ~ dataHint`, dataHint);
   const { pathname } = useRouter();

   return (
      <div className="search-suggestion" 
      // hidden={pathname === "/search-product"}
       >
         <ul className="custom-scroll row">
            {dataHint.map(({ name, front_image, price, slug, rating }, index) => (
               <li key={index} className="col-lg-3 col-xl-3 col-md-6 col-12">
                  <div className="product-cart media">
                     <Link href={"/product/" + slug} passHref>
                        <img src={front_image} role="button" className="img-fluid lazyload" alt="" />
                     </Link>
                     <div className="media-body">
                        <Link href={"/product/" + slug}>
                           <a role="button">
                              <h6 className="mb-1">{name}</h6>
                           </a>
                        </Link>
                        <RatingDetails average_rating={rating} />
                        <p className="mb-0 mt-1">{price}</p>
                     </div>
                  </div>
               </li>
            ))}
            {/* {nbPages === 0 && query && <p className="alert alert-warning mt-3 w-100 text-center ">There is no result</p>} */}
         </ul>
      </div>
   );
}

export default SearchHint;
