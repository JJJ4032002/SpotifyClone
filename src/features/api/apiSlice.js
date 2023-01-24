import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CountryCodes } from "../../data";
export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: async (headers, { getState }) => {
      const token = getState().token.value;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTracks: builder.query({
      // The URL for the request is 'https://api.spotify.com/v1/search?q=rock&type=artist'
      query: (searchObj) => {
        if (searchObj.Country !== "Default") {
          let CountryString = CountryCodes[searchObj.Country];
          return `/search?q=artist:${searchObj.debouncedSearchTerm}&market=${CountryString}&type=track`;
        } else {
          return `/search?q=artist:${searchObj.debouncedSearchTerm}&limit=50&type=track`;
        }
      },
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetTracksQuery } = apiSlice;
