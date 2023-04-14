export const apiURL = "https://rickandmortyapi.com/api/character/";
import fetch from "cross-fetch";

// export const getCharacters = async (value: string) => {
//   try {
//     const response = await fetch(`${apiURL}?name=${value}`, {
//       method: "GET",
//     });

//     if (response.status !== 200) {
//       throw { ...(await response.json()) }.message;
//     }
//     return await response.json();
//   } catch (err) {
//     throw new Error(`${err}`);
//   } finally {
//   }
// };

// export const getCharacterByID = async (id: string) => {
//   try {
//     const response = await fetch(`${apiURL}${id}`, {
//       method: "GET",
//     });

//     if (response.status !== 200) {
//       throw { ...(await response.json()) }.message;
//     }
//     return await response.json();
//   } catch (err) {
//     throw new Error(`${err}`);
//   } finally {
//   }
// };