import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fetchApiSingleProductBySlug } from "../../common/fetchApi";
import Breadcrumb from "../../components/BreadCrumb";
import ClothReview from "../../components/product/ClothReview";
import ShopSection from "../../components/product/ShopSection";
import SubscribeBox from "../../components/SubscribeBox";

function Product() {
   const [data, setData] = useState({});
   const [review, setReview] = useState({});
   const {
      query: { slug },
   } = useRouter();
   useEffect(() => {
      if (slug)
         fetchApiSingleProductBySlug(slug).then((result) => {
            setData(result.data.product);
            setReview(result.data.review);
         });
   }, [slug]);
   // return 'Product'
   return (
      <>
         {data.categories && (
            <Breadcrumb title={data.name} bredcrumbList={data.categories.map((category) => ({ href: "/product-category/" + category.slug, title: category.name }))} />
         )}
         {
            // isLoading || isError || isFetching ? <PlaceHolderShopSection /> :
            data.slug && <ShopSection {...data} />
         }
         {
            // isLoading || isError || isFetching ? <PlaceHolderClothReview /> :
            data.slug && <ClothReview {...data} review={review} />
         }

         {
            // isLoading || isError || isFetching ? <PlaceHolderProductSection /> :
            // <ProductSection {...data} />
         }
         <SubscribeBox />
      </>
   );
}

export default Product;
