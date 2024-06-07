import Hero from "@/components/shared/Hero";
import HeroProjects from "@/components/shared/HeroProjects";

const RootPage = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Hero/>
			<HeroProjects/>
    </div>
  )
}

export default RootPage;