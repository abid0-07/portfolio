"use client";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "../ui/button";

const HackerBtn = ({ label }: { label: string }) => {
  const [displayText, setDisplayText] = useState(label);
  const charset = "abcdefghijklmnopqrstuvwxyz";

  const randomChars = (length: number) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)]
    ).join("");
  };

  const scramble = async (input: string) => {
    let prefix = "";
    for (let index = 0; index < input.length; index++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      prefix += input.charAt(index);
      setDisplayText(prefix + randomChars(input.length - prefix.length));
    }
  };

  const handleDownload = () => {
    try {
      // You can replace this with the actual path to your CV file
      // For now, we'll create a placeholder functionality
      const cvUrl = "/resume.pdf"; // Add your CV file to the public folder
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "CV-Portfolio.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: open a new tab with contact information
      window.open("/contact", "_blank");
    }
  };

  const startScrambling = () => {
    scramble(label);
  };

  useEffect(() => {
    setDisplayText(label);
  }, [label]);

  return (
    <Button
      size={"lg"}
      className="text-base px-6 py-6 min-w-fit max-sm:px-4 max-sm:py-5 max-sm:text-sm download-btn"
      onMouseEnter={startScrambling}
      onClick={handleDownload}
    >
      <Download className="mx-1 max-sm:w-4 max-sm:h-4" />
      {displayText}
    </Button>
  );
};

export default HackerBtn;
