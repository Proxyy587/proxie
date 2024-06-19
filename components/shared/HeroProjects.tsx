import { heroProjectsContent } from "@/constant";
import Link from "next/link";
import React from "react";

const HeroProjects = () => {
  return (
    <section className="flex flex-col mt-4 md:mt-6 lg:mt-6 max-w-full">
      <h1 className="h4-medium">Projects 📂</h1>
      <div className="w-full flex-center flex-col gap-3 pt-2">
        {heroProjectsContent.map((project, idx) => (
          <Link
            key={idx}
            href={project.url}
            className="group w-full flex items-start justify-center flex-col bg-gray-300/10 backdrop-blur-md -mx-3 rounded-lg px-3 py-2 transition-all duration-300 ease-in-out md:hover:scale-95 md:hover:bg-sky-300/20"
          >
            <h2 className="flex items-center justify-between text-sm font-medium tracking-tight text-title md:group-hover:text-primary">
              {project.title}
              <Svg />
            </h2>
            <p className="text-sm text-gray-400">{project.description}</p>
          </Link>
        ))}
      </div>
      <div className="group mt-6 md:mt-8 flex-start gap-1 link text-gray-500 w-fit flex-shrink hover:cursor-default">
        <Svg2 />
        <div className="flex flex-wrap items-center">
          <span>Feel free to reach me out at</span>
          <span className="mx-1">
            <Link
              href={"https://x.com/proxyxd_s"}
              target="_blank"
              className="underline underline-offset-2 text-black dark:text-white/95"
            >
              @proxyxd
            </Link>
          </span>
          or
          <span className="md:ml-1">
            <Link
              href={"mailto:abhijitbhattacharjee333@gmail.com"}
              target="_blank"
              className="underline underline-offset-2 text-black dark:text-white/95"
            >
              my email
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

function Svg() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      className="ml-auto text-primary opacity-0 transition-opacity duration-150 md:group-hover:opacity-100"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
    </svg>
  );
}

function Svg2() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 256 256"
      className="-mt-0.5 inline-block transition-all duration-300 ease-in-out md:group-hover:scale-125 md:group-hover:text-primary"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-32.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
    </svg>
  );
}
export default HeroProjects;
