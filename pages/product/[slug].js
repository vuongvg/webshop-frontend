import { setRevalidateHeaders } from "next/dist/server/send-payload";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchApiProductBySlug } from "../../common/fetchApi";
import ProductCard from "../../components/ProductCard";

function Product() {
   const [data, setData] = useState({});
   const {
      query: { slug },
   } = useRouter();
   useEffect(() => {
      if (slug) fetchApiProductBySlug(slug).then((result) => setData(result.data));
   }, [slug]);

   return (
      <div>
         <p>Product</p>
         {data.slug && <ProductCard {...data} />}
      </div>
   );
}

export default Product;
