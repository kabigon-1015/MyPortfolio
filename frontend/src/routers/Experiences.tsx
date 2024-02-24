import { FaRegBuilding } from "react-icons/fa";

export const Experiences = () => {
  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-blue-100">
            <FaRegBuilding></FaRegBuilding>
          </span>
          <time className="flex items-center pt-1 pl-2 text-base font-semibold leading-none text-gray-400 dark:text-gray-500">
            2023年1月
          </time>
          <h3 className="block mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            経験1
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            hogehogeな経験をしました
          </p>
        </li>
      </ol>
    </>
  );
};
