import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const experiencePage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden px-4 max-sm:px-2">
      <Badge variant="secondary" className="gap-1.5 py-1 max-sm:text-xs">
        <Briefcase className="h-4 w-4 max-sm:h-3 max-sm:w-3" />
        Experience
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Experience</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        {portfolioConfig.experience.map((exp, index) => (
          <div
            className="w-full h-fit flex max-sm:flex-col max-sm:gap-2"
            key={index}
          >
            <FramerWrapper
              y={0}
              x={-100}
              delay={0.35 + index * 0.1}
              className="w-1/4 max-sm:w-full font-outfit flex items-center justify-evenly max-sm:justify-start text-lg max-sm:text-base font-semibold"
            >
              {exp.period}
            </FramerWrapper>
            <FramerWrapper
              y={0}
              x={100}
              delay={0.35 + index * 0.1}
              className="relative w-3/4 max-sm:w-full border-l-4 max-sm:border-l-2 border-l-[#3c3c3c] p-4 max-sm:p-3 gap-3 education_point"
            >
              <div className="text-2xl font-outfit max-sm:text-xl font-bold">
                {exp.position}, <br /> {exp.company}
              </div>
              <p className="font-inter text-base w-full text-primary max-sm:text-sm max-sm:leading-5">
                {exp.description}
              </p>
            </FramerWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default experiencePage;
