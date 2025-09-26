import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const page = () => {
  const items = portfolioConfig.about.hobbies.map((hobby) => ({ hobby }));

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden px-4 max-sm:px-2">
      <Badge variant="secondary" className="gap-1.5 py-1 max-sm:text-xs">
        <User2 className="h-4 w-4 max-sm:h-3 max-sm:w-3" />
        About me
      </Badge>
      <div className="flex flex-col gap-5">
        <Heading>
          {portfolioConfig.title}
          <br className="max-sm:hidden" /> Based In{" "}
          {portfolioConfig.about.personalInfo.nationality}.
        </Heading>

        <FramerWrapper y={0} x={100}>
          <p className=" font-inter text-xl w-full text-primary max-sm:text-lg ">
            {portfolioConfig.about.bio}
          </p>
        </FramerWrapper>
      </div>
      <FramerWrapper
        className="w-full flex flex-row justify-between max-lg:flex-col max-sm:gap-4"
        y={100}
        delay={0.3}
      >
        <Aboutfooter />
      </FramerWrapper>
      <FramerWrapper className="block" y={100} delay={0.31}>
        <h1 className="gap-2 text-3xl font-outfit text-primary font-semibold flex icon_underline relative max-sm:text-2xl">
          {" "}
          <Heart className="h-8 w-8 max-sm:h-6 max-sm:w-6" /> Hobbies
        </h1>
        <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col max-sm:gap-3 max-sm:p-1">
          {items.map((val, indx) => {
            return (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-xl text-primary pt-3 max-lg:justify-start max-sm:text-lg max-sm:pt-2"
              >
                <Circle className="h-3 w-3 max-sm:h-2 max-sm:w-2" /> {val.hobby}
              </div>
            );
          })}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default page;
