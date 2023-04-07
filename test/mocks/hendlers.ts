import { rest } from "msw";
import { apiURL } from "../../src/utils/api";

export const handlers = [
  rest.get(`${apiURL}?name=`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        info: {
          count: 826,
          pages: 42,
          next: "https://rickandmortyapi.com/api/character/?page=20",
          prev: "https://rickandmortyapi.com/api/character/?page=18",
        },
        results: [
          {
            id: 361,
            name: "Toxic Rick",
            status: "Dead",
            species: "Humanoid",
            type: "Rick's Toxic Side",
            gender: "Male",
            origin: {
              name: "Alien Spa",
              url: "https://rickandmortyapi.com/api/location/64",
            },
            location: {
              name: "Earth",
              url: "https://rickandmortyapi.com/api/location/20",
            },
            image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
            episode: ["https://rickandmortyapi.com/api/episode/27"],
            url: "https://rickandmortyapi.com/api/character/361",
            created: "2018-01-10T18:20:41.703Z",
          },
          // ...
        ],
      })
    );
  }),
  rest.get(`${apiURL}1`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Earth",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
        ],
        url: "https://rickandmortyapi.com/api/character/2",
        created: "2017-11-04T18:50:21.651Z",
      })
    );
  }),
  rest.get(`${apiURL}0`, (req, res, ctx) => {
    return res(ctx.status(500), ctx.json([]))
  }),
];


