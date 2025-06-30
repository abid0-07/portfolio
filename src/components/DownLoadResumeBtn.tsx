import React from "react";
import HackerBtn from "./animation/HackerBtn";

function DownLoadResumeBtn() {
  return (
    <div className="h-fit w-full mt-4 py-2 px-4 flex justify-center max-lg:justify-center max-sm:mt-10 max-sm:px-2">
      <HackerBtn label="Download CV" />
    </div>
  );
}

export default DownLoadResumeBtn;
