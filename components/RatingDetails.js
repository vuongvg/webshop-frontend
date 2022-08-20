import React, { useEffect, useState } from "react";

function RatingDetails({ average_rating, showNum, rating_count, hidenReview }) {
   return (
      <div>
         <ul className="rating d-flex my-1">
            {Array(5)
               .fill(0)
               .map((item, index) =>
                  index + 1 <= average_rating ? (
                     <li key={index} className="m-0 ">
                        <i className="fas fa-star theme-color"></i>  
                     </li>
                  ) : (
                     <li key={index} className="m-0 ">
                        <i className="fas fa-star "></i>
                     </li>
                  )
               )}
            {showNum && <>({average_rating === "0.00" ? 0 : Number(average_rating).toFixed(1)})</>}
            {!hidenReview && rating_count ? <> ({rating_count} reviews)</> : null}
         </ul>
      </div>
   );
}

export default RatingDetails;
