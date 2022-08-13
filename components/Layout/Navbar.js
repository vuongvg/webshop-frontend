import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Navbar() {
   const [value, setValue] = useState("");
   const router = useRouter();
   const {
      pathname,
      query: { key },
   } = router;
   useEffect(() => {
      if (pathname !== "/search-product") setValue("");
   }, [pathname]);

   useEffect(() => {
      setValue(key?.replace("_", " "));
   }, [key]);

   // const handleChange = (e) => {
   //    const valueInput = e.target.value.replace(" ", "_");
   //    router.push("/search-product?key=" + valueInput);
   // };

   const handleChange = (e) => {
      setValue(e.target.value);
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      router.push("/search-product?key=" + value.replace(" ", "_"));
   };

   return (
      <div className="d-flex py-2 mb-3 bg-primary text-light fs-5">
         <div className="">
            <Link href="/">
               <a className="mx-3">Home</a>
            </Link>
            <Link href="/product-category">
               <a>All category</a>
            </Link>
            <Link href="/product-category/kids">
               <a className="mx-3">Kids</a>
            </Link>
            <Link href="/product-category/women">
               <a className="mx-3">Women</a>
            </Link>
            <Link href="/product-category/dresses">
               <a>Dresses</a>
            </Link>
         </div>
         <div className="m-auto">
            <form action="" onSubmit={handleSubmit}>
               <input type="text" value={value || ""} onChange={(e) => handleChange(e)} />
               <button className="border" type="submit">
                  Search
               </button>
            </form>
         </div>
      </div>
   );
}

export default Navbar;
