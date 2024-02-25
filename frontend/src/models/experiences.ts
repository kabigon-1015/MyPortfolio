import dayjs from "dayjs";
import { match } from "ts-pattern";

export type GetExperiences = {
  id: string;
  experienceType: string[];
  title: string;
  content: string;
  startDate: Date;
  endDate?: Date;
  github?: string;
  url?: string;
  urlName?: string;
  publishedAt?: Date;
  revisedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
};

export const getDateString = (date: Date) => {
  return dayjs(date).format("YYYY年MM月");
};

export const encodeExperienceType = (ExperienceType: string) => {
  return match(ExperienceType)
    .with("インターン", () => "FaRegBuilding")
    .with("ハッカソン", () => "FaLaptopCode")
    .with("研究", () => "HiAcademicCap")
    .otherwise(() => "VscAccount");
};
