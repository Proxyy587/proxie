"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { navItems } from "@/constant";
import { Tabs } from "../ui/tabs";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import Link from "next/link";

const Header = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const components: { title: string; href: string; src: string }[] = [
		{
			title: "Projects",
			href: "/projects",
			src: "/lofigirl.webp",
		},
		{
			title: "Music",
			href: "/music",
			src: "/musicgirl.webp",
		},
		{
			title: "Books",
			href: "/books",
			src: "/book.webp",
		},
		{
			title: "Anime",
			href: "/anime",
			src: "/anime.webp",
		},
		{
			title: "Uses",
			href: "/uses",
			src: "/animeroom.webp",
		},
		{
			title: "FAQs",
			href: "/faq",
			src: "/naruto.webp",
		},
	];

	return (
		<header className="flex-between">
			<nav className="flex-center gap-2 rounded-3xl px-1 py-2 shrink-0">
				<Image
					src={"/logo.png"}
					width={44}
					height={44}
					alt="logo"
					className="object-cover rounded-full hover:scale-90 transition-all ease-in-out hidden md:block border-2"
				/>
				<div className="px-1 flex-center gap-2">
					<Tabs tabs={navItems} />
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>menu</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="text-white grid w-[150px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[350px]">
										{components.map((component) => (
											<li key={component.title}>
												<Link
													key={component.title}
													href={component.href}
													className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground relative z-10 hover:text-white hover:opacity-80"
												>
													<div className="text-sm font-medium leading-none ">
														{component.title}
													</div>
													<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
														<Image
															src={component.src}
															alt={component.src}
															width={800}
															height={520}
															className="absolute object-cover inset-0 w-full h-full -z-40 rounded-md  brightness-50"
														/>
													</p>
												</Link>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</nav>
			<nav className="flex-center ml-auto">
				<Button
					aria-label="toogle theme"
					size={"icon"}
					variant={"ghost"}
					className="flex flex-col items-center justify-center ml-1 overflow-hidden font-medium duration-200 ease-in-out rounded-full sm:p-4"
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
				>
					<Moon
						aria-label="Dark"
						className={`absolute w-5 h-5 transition-all duration-300 ease-in-out transform ${
							theme === "dark"
								? "rotate-0 scale-100 opacity-100"
								: "rotate-90 scale-0 opacity-0"
						}`}
					/>
					<Sun
						aria-label="Light"
						className={`absolute w-5 h-5 transition-all duration-300 ease-in-out transform ${
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
