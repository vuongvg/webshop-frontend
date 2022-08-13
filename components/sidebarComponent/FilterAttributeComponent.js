import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { queryDelSlug } from "../../common";
// import { useRefinementList } from "react-instantsearch-hooks-web";

function FilterAttributeComponent({ name, attribute = [], typeFilter, children }) {
   const [listItemChecked, setListItemChecked] = useState([]);
   const firstRender = useRef(true);
   const router = useRouter();
   const query = router.query;
   console.log("render");
   useEffect(() => {
      if (query[typeFilter]) {
         setListItemChecked(queryDelSlug(query)[typeFilter].split(","));
      } else {
         setListItemChecked([]);
      }
   }, [router.asPath]);

   const handleChange = (e, slug) => {
      const isCheck = e.target.checked;
      if (isCheck) {
         setListItemChecked((prev) => [...prev, slug]);
      } else {
         setListItemChecked((prev) => prev.filter((item) => item !== slug));
      }
   };

   useEffect(() => {
      const newQuery = { ...queryDelSlug(query), [typeFilter]: listItemChecked.join(",") };
      if (!listItemChecked[0]) delete newQuery[typeFilter];
      !firstRender.current &&
         router.push(
            {
               pathname: "/product-category/" + query.slug,
               query: newQuery,
            },
            null,
            {
               scroll: false,
               shallow: false,
            }
         );
      firstRender.current = false;
   }, [listItemChecked]);

   return (
      <li className="onclick-title " key={name}>
         <h6 hidden={typeFilter}>{name}</h6>
         <ul className={typeFilter ? "" : "onclick-content"}>
            {name === "Price"
               ? children
               : attribute.map(({ count, name, slug, checked }, index) => (
                    <li key={slug}>
                       <div className="form-check ps-0 custome-form-check d-flex">
                          <input
                             className="checkbox_animated check-it"
                             type="checkbox"
                             id="flexCheckDefault"
                             checked={
                                listItemChecked.includes(slug)
                                // queryDelSlug(query)[typeFilter]?.split(",").includes(slug)
                             }
                             onChange={(e) => handleChange(e, slug)}
                          />
                          <label className="form-check-label ms-2" htmlFor="flexCheckDefault12">
                             {/* {value}
                           {attribute === "discount" && "% and above"} */}
                             {children || name}
                          </label>
                          <div className="font-light ms-auto">({count})</div>
                       </div>
                    </li>
                 ))}
         </ul>
      </li>
   );
}

export default FilterAttributeComponent;
