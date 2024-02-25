import { client } from "../composable/experiences";
import { GetExperiences, getDateString } from "../models/experiences";
import { useEffect, useState } from "react";
import { DisplayExperienceIcon } from "../components/experiences/DisplayExperienceIcon";

export const Experiences = () => {
  const [experiencesData, setExperiencesData] = useState<GetExperiences[]>();
  useEffect(() => {
    (async () => {
      const experiences = await client
        .get<any>({
          endpoint: "get-experiences",
        })
        .catch((err) => {
          throw Error(`Reponse failed: ${err}`);
        });
      setExperiencesData(experiences.contents);
    })();
  }, []);

  return (
    <>
      {experiencesData ? (
        experiencesData.map((experienceItem: GetExperiences) => {
          return (
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-6">
                <DisplayExperienceIcon
                  experienceType={experienceItem.experienceType[0]}
                ></DisplayExperienceIcon>
                <time className="flex items-center pt-1 pl-2 text-base font-semibold leading-none text-gray-400 dark:text-gray-500">
                  {getDateString(experienceItem.startDate)}
                </time>
                <h3 className="block mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  {experienceItem.title}
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  {experienceItem.content}
                </p>
                {experienceItem.url && (
                  <a className="link link-info" href={experienceItem.url}>
                    {experienceItem.urlName}
                  </a>
                )}
              </li>
            </ol>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};
