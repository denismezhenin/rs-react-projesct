import {
  fetchBaseQuery,
  buildCreateApi,
  coreModule,
  reactHooksModule,
} from "@reduxjs/toolkit/query/react";
import { AllCharacters, Character } from "../constants/constants";
import { apiURL } from "../utils/api";

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true })
);

export const characterAPI = createApi({
  reducerPath: "characterAPI",
  baseQuery: fetchBaseQuery({ baseUrl: apiURL }),
  endpoints: (build) => ({
    getCharacters: build.query<AllCharacters, string>({
      query: (value: string) => `?name=${value}`,
    }),
    getParticularCharacter: build.query<Character, string>({
      query: (id: string) => `${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetParticularCharacterQuery } =
  characterAPI;
