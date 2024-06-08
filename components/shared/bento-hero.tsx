import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Commits from "./commits";
export const revalidate = 60;

const BentoHero = async () => {

	return (
		<section className="md:mt-8 lg:mt-10 pt-8 pb-16">
			<div className="grid md:grid-cols-6 grid-cols-3 mt-8 gap-3">
				<div className="col-span-3">
					<Link
						href={"github.com"}
						className="relative h-full w-full group flex flex-col justify-between overflow-hidden rounded-2xl text-white transform-gpu transition-all duration-500 will-change-[outline,_transform] group-hover:scale-95 active:scale-100 hover:scale-95"
					>
						<span className="pointer-events-none absolute inset-0 -z-20">
							<Image
								src={"/catphoto.webp"}
								alt=""
								className="rounded-lg absolute inset-0 h-full w-full object-cover object-center brightness-[0.7] "
								width={564}
								height={642}
							/>
							<span className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-neutral-900/20 dark:bg-neutral-900/50"></span>
						</span>
						<span className="px-6 pt-6">
							<span className="flex justify-between">
								<Github width={24} height={24} />
							</span>
						</span>
						<span className="space-y-0.5 px-6 pb-6">
							<span className="block font-semibold">GitHub</span>
							<span className="block text-sm">
								some weird codes written by me
							</span>
						</span>
					</Link>
				</div>

				<div className="col-span-2">
					<div className="bg-[#f7f2f2] dark:bg-[#0d1117] rounded-lg h-36 relative group hover:scale-95 duration-500 transform-gpu">
						<Link href="github.com">
							<Commits />
						</Link>
					</div>
				</div>
				<Link
					href={"#"}
					className="bg-black h-36 text-white rounded-lg items-center flex justify-center relative overflow-hidden hover:scale-95 duration-500 transform-gpu"
				>
					<div className="-rotate-90 text-white font-extrabold text-2xl mt-11 mb-10 ml-8">
						<time className="truncate text-sm">
							Playing Now
						</time>
						<br />
						<span className="absolute text-sm font-normal truncate">
							Waka Waka Shakira
						</span>
					</div>
					<Image
						src={""}
						alt={""}
						width={500}
						height={500}
						className="blur-lg absolute -bottom-3 -left-12 brightness-50"
					/>
				</Link>
			</div>
		</section>
	);
};

export default BentoHero;
