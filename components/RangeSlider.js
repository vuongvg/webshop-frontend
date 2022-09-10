/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect } from "react";

let rangeSlice = "";

function RangeSlider({ min, max, minHandle, maxHandle }) {

   const router = useRouter();
   const { query } = router;

   useEffect(() => {
      let $range = $(".js-range-slider");
      if (rangeSlice) {
         rangeSlice.reset();
         rangeSlice.destroy();
      }

      $range.ionRangeSlider({
         type: "double",
         min: min,
         max: max,
         from: minHandle || min,
         to: maxHandle || max,
         prefix: "$ ",
         step: 1,
         prettify_enabled: true,
         prettify_separator: ".",
         values_separator: " - ",
         force_edges: true,

         onFinish: function (data) {
            router.push(
               {
                  pathname: "/product-category/" + query.slug,
                  query: { ...query, range_price: `${data.from}:${data.to}` },
               },
               null,
               {
                  scroll: false,
                  shallow: false,
               }
            );
         },
      });
      rangeSlice = $range.data("ionRangeSlider");
      rangeSlice.update({
         from: minHandle||min,
         to: maxHandle||max,
      });
   }, [
      minHandle,
      maxHandle,
      min,
      max,
   ]);

   return (
      <>
      <div className="range-slider category-list">
         <input type="text" className="js-range-slider" defaultValue="" />
      </div>
      {/* <Script src="/js/ion.rangeSlider.min.js"></Script> */}
      </>
   );
}

export default RangeSlider;
