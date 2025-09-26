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
      <h3 className="font-inter text-2xl max-sm:text-xl max-sm:text-center text-gray-600 dark:text-gray-300">
        My Name is
      </h3>
      <h1 className="font-outfit text-8xl name_underline text-primary max-sm:text-5xl max-sm:text-center font-bold max-sm:leading-tight">
        {firstName} {middleName} <br className="max-sm:hidden" />
        {/* <span className="max-sm:block">{lastName}</span> */}
        <span className="max-sm:hidden"> {lastName} .</span>
      </h1>
      <TextRotator />
    </>
  );
};
export default HeroTexts;
