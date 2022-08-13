export const convertObjectToParams = (obj) =>
   Object.entries(obj)
      .map(([key, val]) => `${key}=${val}`)
      .join("&");

export const convertParamsToObject = (str) => JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');

export const queryDelSlug = (query) => {
   const newQuery = { ...query };
   delete newQuery.slug;
   return newQuery;
};
