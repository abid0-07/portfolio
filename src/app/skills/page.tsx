import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";
import ScrollContainer from "@/components/ScrollContainer";

const skillPage = () => {
  return (
    <ScrollContainer>
      {/* SKILLS PAGE */}
      <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden px-4 max-sm:px-2">
        <Badge variant="secondary" className="gap-1.5 py-1 max-sm:text-xs">
          <LightbulbIcon className="w-4 h-4 max-sm:w-3 max-sm:h-3" />
          My Skills
        </Badge>
        <div className="flex flex-col gap-3">
          <Heading>My Technical Experience/Skills.</Heading>
          <FramerWrapper y={0} x={200}>
            <p className="font-inter text-xl w-full text-primary max-sm:text-lg">
              Currently i am a fresher and i have a solid understand of HTML5,
              CSS3, JS, TS and React, including responsive design principles. I
              specialize in building web applications and sites using
              Javascript, Typescript, React, Nextjs & Node. I also have a solid
              understanding of SQL and have experience working with databases
              such as MySQL and MongoDB. Machine Learning is one of my favorite
              field and I have a solid understanding of ML concepts and
              algorithms, including supervised and unsupervised learning, neural
              networks, and natural language processing. I have experience with
              popular ML frameworks such as TensorFlow and Keras. I am also
              familiar with data preprocessing techniques, feature engineering,
              and model evaluation metrics. I am always eager to learn new
              technologies and improve my skills.
            </p>
          </FramerWrapper>
          <FramerWrapper y={100} delay={0.3} className="block w-full">
            <h1 className="gap-2 text-2xl font-outfit text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              Programming Languages
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter
                items={portfolioConfig.skills.programmingLanguages}
              />
            </div>
          </FramerWrapper>
          <FramerWrapper className="block w-full" y={100} delay={0.32}>
            <h1 className="gap-2 text-2xl font-outfit text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              Framework/Libraries
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.skills.frameworks} />
            </div>
          </FramerWrapper>
          <FramerWrapper className="block w-full" y={100} delay={0.34}>
            <h1 className="gap-2 text-2xl font-outfit text-primary font-semibold flex text-underline relative max-sm:text-xl mb-4">
              Tools & Technologies
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.skills.tools} />
            </div>
          </FramerWrapper>
          <FramerWrapper className="block w-full" y={100} delay={0.34}>
            <h1 className="gap-2 text-2xl font-outfit text-primary font-semibold flex text-underline relative max-sm:text-xl mb-4">
              ML & Data Science
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.skills.ml} />
            </div>
          </FramerWrapper>
        </div>
      </div>
    </ScrollContainer>
  );
};

export default skillPage;
