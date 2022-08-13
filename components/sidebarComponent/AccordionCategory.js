import React from "react";
import FilterAttributeComponent from "./FilterAttributeComponent";

function AccordionCategory({ attribute, name, children, typeFilter }) {

   return (
      <div className="accordion-item category-rating">
         <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
               {name}
            </button>
         </h2>
         <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body category-scroll">
               <ul className={name === "Rating" ? "" : "category-list"}>
                  {
                     <FilterAttributeComponent attribute={attribute} name={name} typeFilter={typeFilter}>
                        {children}
                     </FilterAttributeComponent>
                  }
               </ul>
            </div>
         </div>
      </div>
   );
}

export default AccordionCategory;
