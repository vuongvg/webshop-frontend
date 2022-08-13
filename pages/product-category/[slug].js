import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchApiProductCategory } from "../../common/fetchApi";
import BannerDetail from "../../components/BannerDetail";
import PagePagination from "../../components/PagePagination";
import ProductCard from "../../components/ProductCard";
import Sidebar from "../../components/sidebarComponent/Sidebar";
import SortProducts from "../../components/SortProducts";

function ProductCategory() {
   const [data, setData] = useState({ list_products: [] });
   const [pagination, setPagination] = useState({});
   const { page, "per-page": per_page, "total-page": total_page, "total-products": total_products } = pagination;
   // const { page,  per_page,  total_page,  total_products } = pagination;

   const router = useRouter();
   const { query } = router;
   useEffect(() => {
      if (query.slug)
      console.log('api');
         fetchApiProductCategory(query).then((result) => {
            setData(result.data);
            setPagination(result.headers);
         });
   }, [query]);

   const handleClick = () => {
      router.push("/product-category/" + query.slug);
   };

   return (
      <div>
         <section className="section-b-space">
            <div className="container">
               <div className="row">
                  <div className="col-lg-3 col-md-4">
                     <button className="btn border mb-2" onClick={() => handleClick()}>
                        Clear All
                     </button>
                     {data.filterSidebar && <Sidebar {...data.filterSidebar} />}
                  </div>
                  <div className="col-lg-9 col-12 ratio_30">
                     {/* <BannerDetail />
                     <SortSearchProduct itemPerPage={12} />
                     <CustomHitSearchProduct /> */}
                     <BannerDetail />
                     {page && <SortProducts itemPerPage={20} numPage={page} total_products={total_products}/>}
                     <div className="row g-sm-4 g-3 row-cols-lg-4 row-cols-md-3 row-cols-2 gx-sm-4 gx-3 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section">
                        {data.list_products.map((product, index) => (
                           <ProductCard key={index} {...product} />
                        ))}
                     </div>
                     {total_page && <PagePagination totalPages={total_page} />}
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

export default ProductCategory;
