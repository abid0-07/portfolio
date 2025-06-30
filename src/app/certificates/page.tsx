import { portfolioConfig } from "@/config/portfolio.config";
import CertificatesCard from "@/components/CertificatesCard";
import Heading from "@/components/Heading";
import FramerWrapper from "@/components/animation/FramerWrapper";
import ScrollContainer from "@/components/ScrollContainer";

const CertificatesPage = () => {
  return (
    <ScrollContainer>
      <div className="h-full w-full relative overflow-auto">
        {/* Header */}
        <FramerWrapper y={0} scale={0.8}>
          <div className="flex flex-col items-center justify-center py-8 max-sm:py-6 px-4 max-sm:px-2">
            <Heading>Certificates</Heading>
            <div className="w-16 h-1 bg-blue-500 rounded-full mt-2 mb-6 max-sm:w-12 max-sm:mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl font-inter max-sm:text-base max-sm:max-w-sm">
              Professional certifications and achievements that showcase my
              commitment to continuous learning and skill development.
            </p>
          </div>
        </FramerWrapper>

        {/* Certificates Grid */}
        <FramerWrapper y={100} delay={0.3}>
          <div className="w-full pb-20 max-sm:pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-4 max-w-7xl mx-auto px-4 max-sm:px-2">
              {portfolioConfig.certificates.map((certificate, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800/50 rounded-xl p-6 max-sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <CertificatesCard certificate={certificate} />
                </div>
              ))}
            </div>
          </div>
        </FramerWrapper>
      </div>
    </ScrollContainer>
  );
};

export default CertificatesPage;
