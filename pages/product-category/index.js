import React from "react";
import Link from "next/link";

function index() {
   return (
      <div>
         <p>Index product category</p>
         <div className="">
            <Link href="/product-category/kids">
               <a>kids</a>
            </Link>
         </div>
         <Link href="/product-category/dresses">
            <a>dresses</a>
         </Link>
      </div>
   );
}

export default index;
