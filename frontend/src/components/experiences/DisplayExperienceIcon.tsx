import { FaRegBuilding } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { encodeExperienceType } from "../../models/experiences";

interface Props {
  experienceType: string;
}

const DynamicComponent: React.FC<Props> = ({ experienceType }) => {
  const components: { [key: string]: React.FC } = {
    FaRegBuilding,
    FaLaptopCode,
    HiAcademicCap,
    VscAccount,
  };

  const SelectedComponent = components[encodeExperienceType(experienceType)];
  return <SelectedComponent />;
};

export const DisplayExperienceIcon = ({
  experienceType,
}: {
  experienceType: string;
}) => {
  return (
    <span className="absolute z-10 flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -start-3 ring-8 ring-blue-200">
      <DynamicComponent experienceType={experienceType} />
    </span>
  );
};
