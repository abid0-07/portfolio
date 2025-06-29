import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-7xl gap-8">
        {/* LEFT SIDE  */}
        <FramerWrapper
          className="h-full w-auto flex flex-col justify-center gap-6 flex-1"
          y={0}
          x={-100}
        >
          <HeroTexts />
          <div className="h-fit w-full p-4 flex gap-4">
            <SocialLinks />
          </div>
          <DownLoadResumeBtn />
        </FramerWrapper>
        {/* RIGHT SIDE image  */}
        <FramerWrapper
          className="h-full w-[47%] relative flex items-center justify-center max-lg:hidden"
          y={0}
          x={100}
        >
          {/* IMAGE  */}
          <HeroImage />
        </FramerWrapper>
      </div>

      {/* GITHUB BUTTON  */}
      <GithubBtn />
    </div>
  );
}
