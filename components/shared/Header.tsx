"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { navItems } from "@/constant";
import { Tabs } from "../ui/tabs";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="flex-between">
      <nav className="flex-center gap-2 rounded-3xl px-1 py-2 shrink-0">
        <Image
          src={"/logo.png"}
          width={44}
          height={44}
          alt="logo"
          className="object-cover rounded-full hover:scale-90 transition-all ease-in-out hidden md:block hover:border-sky-300 border-spacing-1 border-2"
        />
        <div className="px-1 flex-center gap-2">
          <Tabs tabs={navItems} />
        </div>
      </nav>
      <nav className="flex-center ml-auto">
        <Button
          size={"icon"}
          variant={"ghost"}
          className="button flex flex-col items-center justify-center w-10 h-10 ml-1 overflow-hidden font-medium duration-200 ease-in-out rounded-md sm:p-4 text-text"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Moon
            className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ease-in-out transform ${
              theme === "dark"
                ? "rotate-0 scale-100 opacity-100"
                : "rotate-90 scale-0 opacity-0"
            }`}
          />
          <Sun
            className={`h-[1.2rem] w-[1.2rem] absolute transition-all duration-300 ease-in-out transform ${
              theme === "light"
                ? "rotate-0 scale-100 opacity-100"
                : "-rotate-90 scale-0 opacity-0"
            }`}
          />
        </Button>
      </nav>
    </header>
  );
};

export default Header;
