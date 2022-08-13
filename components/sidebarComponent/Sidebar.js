import React from "react";
import RangeSlider from "../RangeSlider";
import RatingDetails from "../RatingDetails";
import AccordionCategory from "./AccordionCategory";

function Sidebar({ brand, color, discount, price, rating }) {
   rating.map(({ name, slug, count }, index) => {
      rating[index].name = <RatingDetails average_rating={slug} rating_count={count} hidenReview />;
   });
   console.log('render Sidebar');
   return (
      <div className="category-option">
         {/* <div className="button-close mb-3">
            <button className="btn p-0">
               <i data-feather="arrow-left"></i> Close
            </button>
         </div> */}
         <div className="accordion category-name" id="accordionExample">
            <AccordionCategory attribute={brand} name="Brand" typeFilter="pa_brand" />
            {/* <AccordionCategory attribute={price} name="Price" typeFilter="range_price">
               <RangeSlider {...price} />
            </AccordionCategory>
            <AccordionCategory attribute={color} name="Color" typeFilter="pa_color" />
            <AccordionCategory attribute={rating} name="Rating" typeFilter="pa_rating"></AccordionCategory>
            <AccordionCategory attribute={discount} name="Discount" typeFilter="pa_discount"></AccordionCategory> */}

            {/* <MostPopular /> */}
         </div>
      </div>
   );
}

export default Sidebar;
