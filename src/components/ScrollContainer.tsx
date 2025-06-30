"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollContainerProps {
  children: React.ReactNode;
  className?: string;
  showScrollIndicator?: boolean;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({
  children,
  className,
  showScrollIndicator = true,
}) => {
  const [isScrollable, setIsScrollable] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    const checkScrollable = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      setIsScrollable(documentHeight > windowHeight);
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const totalDocumentHeight = documentHeight - windowHeight;
      const scrollPercent = (scrollTop / totalDocumentHeight) * 100;
      setScrollPercentage(scrollPercent);
    };

    checkDevice();
    checkScrollable();
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      checkDevice();
      checkScrollable();
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      {showScrollIndicator && isScrollable && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150 ease-out"
            style={{ width: `${scrollPercentage}%` }}
          />
        </div>
      )}

      {/* Main Content Container */}
      <div
        className={cn(
          "w-full h-full scroll-container page-transition",
          isScrollable && "overflow-y-auto",
          isMobile && "scroll-smooth",
          className
        )}
        style={{
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
        }}
      >
        {children}
      </div>

      {/* Scroll to Top Button - Back to normal position since no bottom nav */}
      {isScrollable && scrollPercentage > 20 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={cn(
            "fixed bottom-6 right-6 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 mobile-nav-button"
          )}
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollContainer;
