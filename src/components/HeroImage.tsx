"use client";
import Image from "next/image";
import { useState } from "react";

const HeroImage = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center">
      {!imageError ? (
        <Image
          src="/portfolioLogo.png"
          alt="Portfolio Logo"
          loading="eager"
          priority
          height={400}
          width={400}
          className="w-full h-auto max-w-md mx-auto object-contain max-lg:max-w-sm max-sm:max-w-[280px] max-sm:h-auto drop-shadow-lg hero-image"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full max-w-md mx-auto max-lg:max-w-sm max-sm:max-w-[280px] h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl max-sm:text-xl hero-image">
          Portfolio
        </div>
      )}
    </div>
  );
};
export default HeroImage;
