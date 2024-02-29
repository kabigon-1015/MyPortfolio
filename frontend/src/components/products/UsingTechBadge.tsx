import { Tech, encodeTechType } from "../../models/tech";

export const UsingTechBadge = ({ tech }: { tech: Tech }) => {
  return (
    <div className={`badge m-1 ${encodeTechType(tech?.techType[0])}`}>
      {tech.title}
    </div>
  );
};
