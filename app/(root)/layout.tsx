import Header from "@/components/shared/Header";

const SubRootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="wrapper flex flex-1 min-h-screen mx-auto flex-col px-4 py-5">
			<Header />
			<section className="md:mt-8 lg:mt-10 pt-8 pb-16">
                {children}
            </section>
		</main>
	);
};

export default SubRootLayout;
