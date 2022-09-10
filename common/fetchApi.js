import axios from "axios";
import { convertObjectToParams } from ".";
// const url = "http://localhost:5001/api";
const url = "https://webshop-sigma.vercel.app/api";

// const url = "https://webshop-xi.vercel.app/";
export const fetchApiProductByCategory = async (query) => {
   try {
      const result = await axios.get(`${url}/product?${convertObjectToParams(query)}`);
      return result;
   } catch (error) {
      console.log(`  ~ error fetchApiProductByCategory`, error);
      return { data: { list_products: [] } };
   }
};

export const fetchApiSearchProduct = async (query) => {
   try {
      if (!query.per_page) query.per_page = 10;
      return await axios.get(`${url}/product?${convertObjectToParams(query)}`);
   } catch (error) {
      console.log(`  ~ error fetchApiSearchProduct`, error);
      return { data: { list_products: [] } };
   }
};

export const fetchApiSingleProductBySlug = async (slug) => {
   try {
      const data= await axios.get(`${url}/product/${slug}`);
      return data
   } catch (error) {
      console.log(`  ~ error fetchApiProductBySlug`, error);
      return { data: {} };
   }
};

export const fetchApiLogin = async (data) => {
   try {
      const result = await axios.post(`${url}/auth/login`, data);
      return result.data;
   } catch (error) {
      console.log(`  ~ error fetchApiLogin`, error);
      return { error: error.response.data };
   }
};

export const fetchApiHome = async () => {
   try {
      const result = await axios.get(`${url}/home`);
      return result.data;
   } catch (error) {
      console.log(`  ~ error fetchApiHome`, error);
      return { error: error.response.data };
   }
};

export const fetchApiRegister = async (data) => {
   try {
      const result = await axios.post(`${url}/auth/register`, data);
      return result.data;
   } catch (error) {
      console.log(`  ~ error fetchApiRegister`, error);
      return { error: error.response.data };
   }
};
export const fetchApiCategories = async () => {
   try {
      const result = await axios.get(`${url}/categories`);
      return result.data;
   } catch (error) {
      console.log(`  ~ error fetchApiCategories`, error);
   }
};
export const fetchApiProductHint = async (keysearch) => {
   try {
      const result = await axios.get(`${url}/search-hint?keysearch=`+keysearch);
      return result.data;
   } catch (error) {
      console.log(`  ~ error fetchApiProductHint`, error);
   }
};
