import React, { useEffect, useState } from "react";

function RatingDetails({ average_rating ,showNum ,rating_count,hidenReview}) {
   return (
      <ul className="rating d-flex ">
         {Array(5)
            .fill(0)
            .map((item, index) =>
               index + 1 <= average_rating ? (
                  <li key={index}  >
                     <i className="fas fa-star theme-color text-warning" style={{color:"#c3c3c3"}}></i>
                  </li>
               ) : (
                  <li key={index}  >
                     <i className="fas fa-star " style={{color:"#c3c3c3"}}></i>
                  </li>
               )
            )}
         {showNum&&<>({average_rating === "0.00" ? 0 : Number(average_rating).toFixed(1)})</>}
         {!hidenReview&&rating_count ? <> ({rating_count} reviews)</> : null}
      </ul>
   );
}

export default RatingDetails;
