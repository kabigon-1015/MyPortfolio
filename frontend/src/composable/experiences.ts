import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "sakabekentaro",
  apiKey: "FkBgZ5X5MSb8JDYDVc0866kGIsXY35ORDYbc",
});

export const getData = async () => {
  const experiences = await client
    .get({
      endpoint: "get-experiences",
    })
    .then((res) => console.log(res));

  console.log(experiences);
};
