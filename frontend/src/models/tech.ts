import { match } from "ts-pattern";

export type Tech = {
  id: string;
  title: string;
  techType: string[];
  publishedAt?: Date;
  revisedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
};

export const encodeTechType = (techType: string) => {
  return match(techType)
    .with("frontend", () => "badge-accent")
    .with("backend", () => "badge-primary")
    .with("infra", () => "badge-warning")
    .with("ml", () => "badge-secondary")
    .with("other", () => "")
    .otherwise(() => "");
};
