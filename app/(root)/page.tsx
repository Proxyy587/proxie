import Contact from "@/components/shared/ContactForm";
import Hero from "@/components/shared/Hero";
import HeroProjects from "@/components/shared/HeroProjects";
import BentoHero from "@/components/shared/bento-hero";

const RootPage = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <HeroProjects />
      <BentoHero />
      <Contact />
    </div>
  );
};

export default RootPage;
