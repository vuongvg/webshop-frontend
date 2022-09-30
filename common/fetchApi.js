import axios from "axios";
import { setCookie} from "cookies-next";
import { convertObjectToParams } from ".";
const url = "http://localhost:5001/api";
// const url = "https://webshop-sigma.vercel.app/api";

// const url = "https://webshop-xi.vercel.app/";

export const http = axios.create({ 
   baseURL: url,
});
http.interceptors.request.use((config) => {
   const token = localStorage.getItem("token") || sessionStorage.getItem("token");
   if (token && !config.headers.authorization) {
      config.headers["Authorization"] = "Bearer " + token;
   }
   return config;
});
http.interceptors.response.use(
   (response) => {
      return response;
   },
   (err) => {
      console.log('refresh token');
      const originRequest = err.config;
      if (err.response.status === 401 && originRequest.url === `${url}/refresh`) {
         localStorage.removeItem("refreshToken");
         localStorage.removeItem("token");

         return Promise.reject(err);
      }
      if (err.response.status === 401 && err.response.data === "Invalid token") {
         const refreshToken = localStorage.getItem("refreshToken");

         return http.post(`${url}/token`, { refreshToken }).then((result) => {
            if (result?.status === 201) {
               localStorage.setItem("refreshToken", result.data.newRefreshToken);
               localStorage.setItem("token", result.data.newToken);
               http.defaults.headers.common["Authorization"] = "Bearer " + result.data.newToken;
               setCookie("login", true,{maxAge:300});
               return http(originRequest);
            }
         });
      }
   }
);

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
      const data = await axios.get(`${url}/product/${slug}`);
      return data;
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

export const fetchApiLogout = async (refreshToken) => {
   try {
      const result = await axios.delete(`${url}/token/${refreshToken}`);
      return result;
   } catch (error) {
      console.log(`  ~ error fetchApiLogout`, error);
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
      const result = await axios.get(`${url}/search-hint?keysearch=` + keysearch);
      return result.data;
   } catch (error) {
      console.log(`  ~ error fetchApiProductHint`, error);
   }
};

export const fetchApiGetUser = async () => {
   const result = await http.get(`${url}/user`);
   return result?.data;
   // try {
   // } catch (error) {
   //    console.log(`  ~ error fetchApiGetUser`, error);
   // }
};

export const fetchApiUpdateUserByWishlist = async (id, data) => {
   try {
      const result = await http.patch(`${url}/user/wishlist/${id}`, data);
      return result;
   } catch (error) {
      console.log(`  ~ error fetchApiUpdateUserByWishlist`, error);
   }
};

export const fetchApiUpdateUserByCartlist = async (id, data) => {
   try {
      const result = await http.patch(`${url}/user/cartlist/${id}`, data);
      return result;
   } catch (error) {
      console.log(`  ~ error fetchApiUpdateUserByCartlist`, error);
   }
};

export const fetchApiUpdateUserByAddresslist = async (id, data) => {
   try {
      const result = await http.patch(`${url}/user/addresslist/${id}`, data);
      return result;
   } catch (error) {
      console.log(`  ~ error fetchApiUpdateUserByAddresslist`, error);
   }
};

export const fetchApiCreateOrder = async (data) => {
   try {
      const result = await http.post(`${url}/order`, data);
      return result;
   } catch (error) {
      console.log(`  ~ error fetchApiCreateOrder`, error);
   }
};

export const fetchApiGetAllOrder = async () => {
   try {
      const result = await http.get(`${url}/order`);
      return result.data;
   } catch (error) {
      console.log(`  ~ error fetchApiGetAllOrder`, error);
   }
};
