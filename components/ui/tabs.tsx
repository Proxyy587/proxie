"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Tab = {
	title: string;
	url: string;
	content?: string | React.ReactNode | any;
};

export const Tabs = ({
	tabs: propTabs,
	containerClassName,
	activeTabClassName,
	tabClassName,
	contentClassName,
}: {
	tabs: Tab[];
	containerClassName?: string;
	activeTabClassName?: string;
	tabClassName?: string;
	contentClassName?: string;
}) => {
	const [active, setActive] = useState<Tab>(propTabs[0]);
	const [tabs, setTabs] = useState<Tab[]>(propTabs);
	const path = usePathname();
	const moveSelectedTabToTop = (idx: number) => {
		const newTabs = [...propTabs];
		const selectedTab = newTabs.splice(idx, 1);
		newTabs.unshift(selectedTab[0]);
		setTabs(newTabs);
		setActive(newTabs[0]);
	};

	return (
		<>
			<div
				className={cn(
					"flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-fit w-full",
					containerClassName
				)}
			>
				{propTabs.map((tab, idx) => (
					<Link
						key={tab.title}
						href={tab.url}
						className="relative transition-all transform-gpu rounded-full md:mx-1"
					>
						<button
							aria-label="tabs"
							onClick={() => {
								moveSelectedTabToTop(idx);
							}}
							className={cn("relative px-3 py-1 rounded-full", tabClassName)}
							style={{
								transformStyle: "preserve-3d",
							}}
						>
							{path === tab.url && (
								<motion.div
									layoutId="clickedbutton"
									transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
									className={cn(
										"absolute inset-0 backdrop-blur-md bg-white/90 dark:bg-black/30 rounded-full ",
										activeTabClassName
									)}
								/>
							)}

							<span className="relative block text-black dark:text-white">
								{tab.title}
							</span>
						</button>
					</Link>
				))}
			</div>
			{/* <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-32", contentClassName)}
      /> */}
		</>
	);
};

// export const FadeInDiv = ({
//   className,
//   tabs,
//   hovering,
// }: {
//   className?: string;
//   key?: string;
//   tabs: Tab[];
//   active: Tab;
//   hovering?: boolean;
// }) => {
//   const isActive = (tab: Tab) => {
//     return tab.value === tabs[0].value;
//   };
//   return (
//     <div className="relative w-full h-full">
//       {tabs.map((tab, idx) => (
//         <motion.div
//           key={tab.value}
//           layoutId={tab.value}
//           style={{
//             scale: 1 - idx * 0.1,
//             top: hovering ? idx * -50 : 0,
//             zIndex: -idx,
//             opacity: idx < 3 ? 1 - idx * 0.1 : 0,
//           }}
//           animate={{
//             y: isActive(tab) ? [0, 40, 0] : 0,
//           }}
//           className={cn("w-full h-full absolute top-0 left-0", className)}
//         >
//           {tab.content}
//         </motion.div>
//       ))}
//     </div>
//   );
// };
