import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { fetchApiProductHint } from "../../../../common/fetchApi";
import SearchHint from "./SearchHint";

let timeSearch = 0;

function SearchBar() {
   const [value, setValue] = useState("");
   const [dataHint, setDataHint] = useState([]);
   const router = useRouter();
   const {
      pathname,
      query: { keysearch },
   } = router;

   useEffect(() => {
      if (pathname !== "/search-product") {
         setValue("");
         document.getElementById("search-full").classList.remove("open");
      }
   }, [pathname]);

   useEffect(() => {
      setValue(keysearch?.replaceAll("_", " "));
   }, [keysearch]);

   const handleChangeSearchInput = (e) => {
      setValue(e.target.value);
      clearInterval(timeSearch);
      timeSearch = setTimeout(() => {
         fetchApiProductHint(e.target.value).then((data) => setDataHint(data));
      }, 500);
   };
   const handleSubmitSearch = (e) => {
      e.preventDefault();
      router.push("/search-product?keysearch=" + value.replaceAll(" ", "_"));
   };

   const handleCloseSearchBar = () => {
      setValue("");
      document.getElementById("search-full").classList.remove("open");
   };
   return (
      <div className="search-full" id="search-full">
         {/* <Configure hitsPerPage={10} />
    <CustomSearchBoxNavBar />
    <HitNavbar /> */}
         <form className="input-group" action="" onSubmit={handleSubmitSearch}>
            <span className="input-group-text">
               <BsSearch fontSize={20} />
            </span>
            <input
               type="text"
               className="form-control search-type"
               placeholder="Search here.."
               id="input-search"
               value={value || ""}
               onChange={(e) => handleChangeSearchInput(e)}
            />
            <span className="input-group-text close-search">
               <MdClose fontSize={20} onClick={handleCloseSearchBar} />
            </span>
         </form>
         {/* <SearchHint dataHint={dataHint} /> */}
      </div>
   );
}

export default SearchBar;
