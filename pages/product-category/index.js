import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/BreadCrumb";
import SubscribeBox from "../../components/SubscribeBox";
import CategoriesCard from "../../components/CategoriesCard";
import { fetchApiCategories } from "../../common/fetchApi";

function Index() {
   const [data, setData] = useState([]);
   useEffect(() => {
      fetchApiCategories().then((result) => setData(result));
   }, []);

   return (
      <>
         <Breadcrumb title={"Shop Category"} />

         <section className="section-b-space">
            <div className="container">
               <div className="row g-4 product-style-1 mb-5 d-flex">
                  {data.map((category, index) => (
                     <div className="col-xl-4 col-md-6" key={index}>
                        <CategoriesCard {...category} />
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <SubscribeBox />
      </>
   );
}

export default Index;
