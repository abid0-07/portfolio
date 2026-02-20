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
          <Heading>My Technical Skills</Heading>
          <FramerWrapper y={0} x={200}>
            <p className="font-inter text-xl w-full text-primary max-sm:text-lg">
              I have a solid understanding of HTML5, CSS3, JavaScript,
              TypeScript, and React, including responsive design principles. I
              specialize in building modern web applications using JavaScript,
              TypeScript, React, Next.js, Node.js, and Express, following clean
              architecture and scalable design practices. I also have a strong
              foundation in databases, with hands-on experience working with
              MySQL and MongoDB, and a good understanding of SQL. Machine
              Learning and AI are among my favorite fields. I have a solid
              understanding of ML concepts and algorithms, including supervised
              and unsupervised learning, neural networks, and natural language
              processing. I have practical experience using frameworks such as
              TensorFlow, Keras, and PyTorch, along with data preprocessing,
              feature engineering, model evaluation, and research-oriented
              experimentation. In addition, I am developing my skills in Cyber
              Security, including web application security, vulnerability
              assessment, and basic penetration testing concepts. I am familiar
              with security tools and best practices to build safer and more
              robust systems. I am always eager to learn new technologies,
              explore advanced concepts, and continuously improve my technical
              and problem-solving skills.
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
              Cyber Security
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.skills.cyber} />
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
