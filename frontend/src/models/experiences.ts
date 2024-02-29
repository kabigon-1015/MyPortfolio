import dayjs from "dayjs";
import { match } from "ts-pattern";
import { Tech } from "./tech";

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
  usingTech?: Tech[];
  publishedAt?: Date;
  revisedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
};

export const getDateString = (startDate: Date, endDate?: Date) => {
  const start = dayjs(startDate).format("YYYY年MM月");
  const end = dayjs(endDate).format("YYYY年MM月");
  return endDate
    ? startDate === endDate
      ? `${start}`
      : `${start}〜${end}`
    : `${start}〜`;
};

export const encodeExperienceType = (experienceType: string) => {
  return match(experienceType)
    .with("インターン", () => "FaRegBuilding")
    .with("ハッカソン", () => "FaLaptopCode")
    .with("研究", () => "HiAcademicCap")
    .otherwise(() => "VscAccount");
};
