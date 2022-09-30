import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchApiSearchProduct } from "../../common/fetchApi";
import Breadcrumb from "../../components/BreadCrumb";
import PagePagination from "../../components/PagePagination";
import ProductCard from "../../components/ProductCard";
import FilterSearchProduct from "../../components/searchComponent/FilterSearchProduct";
import SortProducts from "../../components/SortProducts";

function SearchProduct() {
   const { query } = useRouter();
   const { keysearch } = query;
   const [time, setTime] = useState();
   const [data, setData] = useState({ list_products: [], _total: "" });
   const [pagination, setPagination] = useState({});
   // const { page,  per_page,  total_page,  total_products } = pagination;
   const { page, "per-page": per_page, "total-page": total_page = 1, "total-products": total_products } = pagination;

   useEffect(() => {
      if (keysearch != "undefined") {
         fetchApiSearchProduct(query).then((result) => {
            console.log(`  ~ result`, result);
            setData(result.data);
            setPagination(result.headers);
         });
      }
   }, [query]);
   return (
      <div>
         <Head>
            <title>Search</title>
         </Head>
         <Breadcrumb title={"Search product"} />
         {/* <p>Total: {total_products}</p> */}
         <section className="section-b-space">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 col-12 ratio_30">
                     <FilterSearchProduct />
                     <SortProducts itemPerPage={10} numPage={page} total_products={total_products} />
                     <div
                        className={
                           "row g-sm-4 g-3 row-cols-lg-4 row-cols-md-3 row-cols-2 gx-sm-4 gx-3 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section " +
                           ("typeSearch" && " row-cols-xl-5")
                        }
                     >
                        {data.list_products.map((product, index) => (
                           <ProductCard key={index} {...product} />
                           // <div key={index}>{slug}</div>
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

export default SearchProduct;
