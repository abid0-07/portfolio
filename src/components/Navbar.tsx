"use client";
import { cn } from "@/lib/utils";

import {
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
  MoreHorizontal,
  User,
  Award,
  Briefcase
} from "lucide-react";

import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/animation/DockAnimation";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const data = [
    {
      title: "Home",
      icon: <HomeIcon className="h-full w-full " />,
      href: "/",
    },
    {
      title: "About",
      icon: <User className="h-full w-full " />,
      href: "/about",
    },
    {
      title: "Skills",
      icon: <LightbulbIcon className="h-full w-full " />,
      href: "/skills",
    },
    {
      title: "Experience",
      icon: <Briefcase className="h-full w-full " />,
      href: "/experience",
    },
    {
      title: "Certificates",
      icon: <Award className="h-full w-full " />,
      href: "/certificates",
    },
    {
      title: "Education",
      icon: <GraduationCap className="h-full w-full " />,
      href: "/education",
    },
    {
      title: "Projects",
      icon: <FolderGit2 className="h-full w-full " />,
      href: "/projects",
    },
    {
      title: "Contact",
      icon: <Mail className="h-full w-full " />,
      href: "/contact",
    },
    {
      title: "More",
      icon: <MoreHorizontal className="h-full w-full " />,
      href: "/more",
    },
  ];

  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // On desktop, hide on scroll. On mobile, always show
      if (window.innerWidth > 640) {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      } else {
        setScrolling(false); // Always show on mobile
      }
    };

    handleScroll(); // Check initial state
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed left-1/2 transform -translate-x-1/2 px-2 sm:px-5 w-[95%] sm:w-fit bg-transparent z-[9999999] transition-all duration-300",
        // Desktop positioning and behavior
        "sm:top-3",
        !scrolling
          ? "sm:translate-y-0 sm:opacity-100"
          : "sm:translate-y-[-100px] sm:opacity-0",
        // Mobile positioning - always fixed at top
        "max-sm:top-2 max-sm:translate-y-0 max-sm:opacity-100 max-sm:dock-container-mobile"
      )}
    >
      <Dock
        className={cn(
          "items-end pb-3 rounded-full max-sm:pb-2 max-sm:dock-mobile",
          "max-sm:gap-1 max-sm:px-3"
        )}
      >
        {data.map((item, idx) => (
          <Link href={item.href} key={idx}>
            <DockItem
              className={cn(
                "aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 max-sm:h-12 max-sm:w-12 max-sm:dock-item-mobile",
                pathname === item.href &&
                  " bg-gray-100 !border !border-primary-sky"
              )}
            >
              <DockLabel className="max-sm:text-xs max-sm:px-1 max-sm:py-1 max-sm:dock-label-mobile">
                {item.title}
              </DockLabel>
              <DockIcon
                className={cn(
                  pathname === item.href && "text-[#2f7df4]",
                  "max-sm:h-6 max-sm:w-6"
                )}
              >
                {item.icon}
              </DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
};

export default Navbar;
