import { createClient } from "microcms-js-sdk";
import { GetExperiences } from "../models/experiences";

export const client = createClient({
  serviceDomain: "sakabekentaro",
  apiKey: "FkBgZ5X5MSb8JDYDVc0866kGIsXY35ORDYbc",
});

export const getData = async () => {
  const experiences = await client
    .get<any>({
      endpoint: "get-experiences",
    })
    .catch((err) => {
      throw Error(`Reponse failed: ${err}`);
    });
  const responseExperiencesData: GetExperiences[] = experiences.contents;
  console.log(responseExperiencesData);
  return await responseExperiencesData;
};
