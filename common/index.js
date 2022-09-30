import { toast } from "react-toastify";

export const convertObjectToParams = (obj) =>
   Object.entries(obj)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");

export const convertParamsToObject = (str) => JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');

export const amount = (cartList) => {
   return cartList?.[0]
      ? cartList
           .map(({ qty, price }) => qty * price)
           .reduce((sum, item) => sum + item)
           .toFixed(2)
      : 0;
};

export const queryDelSlug = (query) => {
   const newQuery = { ...query };
   delete newQuery.slug;
   return newQuery;
};

export const toastError = (msg) =>
   toast.error(msg, {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
   });
export const toastSuccess = (msg) =>
   toast.success(msg, {
      position: "top-right",
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
   });
