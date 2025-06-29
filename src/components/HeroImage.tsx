import logo from "../../public/portfolioLogo.png";
import Image from "next/image";

const HeroImage = () => {
  return (
    <>
      <Image
        src={logo}
        alt="logo"
        loading="eager"
        priority
        height={400}
        width={400}
        className="w-full h-auto max-w-md mx-auto object-contain"
      />
    </>
  );
};
export default HeroImage;
