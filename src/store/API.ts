import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiURL } from "../utils/api";

export const characterAPI = createApi({
  reducerPath: "characterAPI",
  baseQuery: fetchBaseQuery({ baseUrl: apiURL }),
  endpoints: (build) => ({
    getCharacters: build.query({
      query: (value) => `?name=${value}`,
    }),
    getParticularCharacter: build.query({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetParticularCharacterQuery } =
  characterAPI;

// export const characterAPI = createApi({
//   reducerPath: "characterAPI",
//   baseQuery: fetchBaseQuery({ baseUrl: apiURL }),
//   endpoints: (build) => ({
//     getCharacters: build.query({
//       query: (value) => `?name=${value}`,
//     }),
//   }),
// });
