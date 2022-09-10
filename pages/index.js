/* eslint-disable @next/next/no-sync-scripts */
import Link from "next/link";
import Slider from "../components/homeComponent/Slider/Slider";
import BannerProductCategory from "../components/homeComponent/BannerProductCategory";
import ProductSlider from "../components/homeComponent/ProductSlider";
import Script from "next/script";
import CategorySlider from "../components/homeComponent/CategorySlider";
import BannerProductCategoryGrid from "../components/homeComponent/BannerProductCategoryGrid";
import ProductGrid from "../components/homeComponent/ProductGrid";
import BannerTimer from "../components/homeComponent/BannerTimer";
import InstagramSlider from "../components/homeComponent/InstagramSlider";
import Services from "../components/homeComponent/Services";
import { useEffect, useState } from "react";

import dataCategories from "../_data/dataCategories.json";
import dataProduct from "../_data/data.json";
import { fetchApiCategories, fetchApiHome, fetchApiProductByCategory, fetchApiSearchProduct } from "../common/fetchApi";

export default function Home() {
   const [data, setData] = useState({});
   useEffect(() => {
      Promise.all([
         fetchApiProductByCategory({ slug: "hoodies-sweatshirts-men" }),
         fetchApiProductByCategory({ slug: "cardigans-and-jumpers-ladies" }),
         fetchApiProductByCategory({ slug: "sale" }),
         fetchApiProductByCategory({ slug: "tops-ladies" }),
         fetchApiCategories(),
      ]).then(([slider, product_slider, product_grid, instagram, category_slider]) =>
         setData((prev) => ({
            ...prev,
            slider: slider.data.list_products,
            product_slider: product_slider.data.list_products,
            product_grid: product_grid.data.list_products,
            instagram: instagram.data.list_products,
            category_slider,
         }))
      );
   }, []);
   if (!data.category_slider) return;

   const dataHome = {
      slider: 
      // data.slider.slice(0, 3).map((product) => ({
      //    product_data: product,
      //    type: "clothes",
      //    slide_data: {
      //       sub_title: "Sale 70% OFF",
      //       sub_title_2: "BUY ONE GET ONE",
      //       title: "New Tranding Fashion",
      //       background_image: "https://themes.pixelstrap.com/voxo/front-end/assets/images/fashion/slider/1.jpg",
      //    },
      // })),
      [
         {
            product_data: data.slider[0],
            type: "clothes",
            slide_data: {
               sub_title: "Sale 70% OFF",
               sub_title_2: "BUY ONE GET ONE",
               title: "New Tranding Fashion",
               background_image: "https://themes.pixelstrap.com/voxo/front-end/assets/images/fashion/slider/1.jpg",
            },
         },
         {
            product_data: data.slider[1],
            type: "clothes",
            slide_data: {
               sub_title: "Sale 70% OFF",
               sub_title_2: "BUY ONE GET ONE",
               title: "New Tranding Fashion",
               background_image: "https://themes.pixelstrap.com/voxo/front-end/assets/images/fashion/slider/2.jpg",
            },
         },
      ],
      collection: data.category_slider.slice(0, 3),
      // productSlider: dataProduct,
      productSlider: data.product_slider,
      // category_slider: dataCategories,
      category_slider: data.category_slider,
      category_grid: data.category_slider,
      productGrid: data.product_grid,
      sale: dataProduct,
      instagram: data.instagram,
   };
   return (
      <>
         <Slider dataSliser={dataHome.slider} />
         <BannerProductCategory dataBanner={dataHome.collection} />
         <ProductSlider dataProduct={dataHome.productSlider} />
         <CategorySlider dataCategorySlider={dataHome.category_slider} />
         <BannerProductCategoryGrid dataBannerProduct={dataHome.category_grid} />
         <ProductGrid dataProduct={dataHome.productGrid} />
         {/* <BannerTimer dataTimer={dataHome.sale} /> */}
         <InstagramSlider dataProduct={dataHome.instagram} />
         <Services />

         {/* <Script src="/js/jquery-3.5.1.min.js"></Script> */}
         {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css" /> */}
      </>
   );
}
