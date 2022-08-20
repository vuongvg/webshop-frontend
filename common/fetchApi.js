import axios from "axios";
import { convertObjectToParams } from ".";
// const url = "http://localhost:5001/";
const url = "https://webshop-sigma.vercel.app/";


// const url = "https://webshop-xi.vercel.app/";
export const fetchApiProductCategory = async (query) => {
   try {
      const result= await axios.get(`${url}api/product?${convertObjectToParams(query)}`)
      return result;
   } catch (error) {
      console.log(`  ~ error fetchApiProductCategory`, error);
      return { data: { list_products: [] } };
   }
};

export const fetchApiSearchProduct = async (query) => {
   try {
      if(!query.per_page) query.per_page=10
      return await axios.get(`${url}api/product?${convertObjectToParams(query)}`);
   } catch (error) {
      console.log(`  ~ error fetchApiSearchProduct`, error);
      return { data: { list_products: [] } };
   }
};

export const fetchApiProductBySlug = async (slug) => {
   try {
      return await axios.get(`${url}api/product/${slug}`);
   } catch (error) {
      console.log(`  ~ error fetchApiProductBySlug`, error);
      return { data: {} };
   }
};
