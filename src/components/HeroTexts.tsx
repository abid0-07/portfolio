import TextRotator from "./TextRotator";
import { portfolioConfig } from "@/config/portfolio.config";

const HeroTexts = () => {
  // Get the name parts
  const nameParts = portfolioConfig.name.split(" ");
  const firstName = nameParts[0];
  const middleName = nameParts.length > 2 ? nameParts[1] : "";
  const lastName = nameParts.length > 2 ? nameParts[2] : nameParts[1];

  return (
    <>
      <h3 className="font-inter text-2xl max-sm:text-xl text-gray-600 dark:text-gray-300">
        My Name is
      </h3>
      <h1 className="font-outfit text-8xl name_underline text-primary max-sm:text-6xl font-bold">
        {firstName} {middleName} <br /> {lastName} .
      </h1>
      <TextRotator />
    </>
  );
};
export default HeroTexts;
