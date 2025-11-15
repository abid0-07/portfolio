import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
// import GithubBtn from "@/components/animation/GithubBtn";
// import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 max-sm:px-2 max-sm:min-h-[calc(100vh-6rem)] max-sm:py-8 max-sm:mobile-scroll-fix hero-container">
      <div className="flex items-center justify-between w-full max-w-7xl gap-8 max-lg:flex-col max-lg:gap-8 max-sm:gap-6">
        {/* LEFT SIDE  */}
        <FramerWrapper
          className="h-full w-auto flex flex-col justify-center gap-6 flex-1 max-lg:w-full max-lg:items-center max-lg:text-center max-sm:gap-4 hero-content max-sm:mobile-hero-spacing"
          y={0}
          x={-100}
        >
          <HeroTexts />
          <div className="h-fit w-full p-4 flex gap-4 max-lg:justify-center max-sm:p-2 max-sm:justify-center">
            <SocialLinks />
          </div>
          {/* <DownLoadResumeBtn /> */}
        </FramerWrapper>
        {/* RIGHT SIDE image  */}
        <FramerWrapper
          className="h-full w-[47%] relative flex items-center justify-center max-lg:w-full max-lg:h-80 max-sm:h-64 max-sm:w-full max-sm:order-first max-lg:order-first"
          y={0}
          x={100}
        >
          {/* IMAGE  */}
          <HeroImage />
        </FramerWrapper>
      </div>

      {/* GITHUB BUTTON  */}
      {/* <GithubBtn /> */}
    </div>
  );
}
