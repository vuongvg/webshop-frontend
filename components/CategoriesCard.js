/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const CategoriesCard = ({ image, slug, name, categories }) => {
   return (
      <div className="category-image">
         <div className="elec-image">
            <img src={image.src} className="img-fluid  lazyload" alt={name} />
         </div>
         <div className="category-contain">
            <Link href={"/product-category/" + slug}>
               <a>
                  <h3>{name}</h3>
               </a>
            </Link>
            <ul className="product-list">
               {categories &&
                  categories.map(({ name, slug }, index) => (
                     <li key={index}>
                        <Link href={"/product-category/" + slug}>
                           <a className="font-light">{name}</a>
                        </Link>
                     </li>
                  ))}
            </ul>
         </div>
      </div>
   );
};

export default CategoriesCard;
