import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Commits from "./commits";
export const revalidate = 60;

const BentoHero = async () => {
	return (
		<section className="md:mt-8 pb-8">
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
						<time className="truncate text-sm">Playing Now</time>
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
			<div className="grid md:grid-cols-6 grid-cols-3 mt-3">
				<div className="flex flex-col col-span-3">
					<div className="flex gap-3">
						<div className="w-24">
							<Link href={"/anime"}>
								<div className="h-36 group rounded-lg hover:scale-95 duration-500 transform-gpu relative">
									<Image
										src={"/hdwallpaper.webp"}
										alt=""
										width={1280}
										height={720}
									/>
									<p className="font-bold -rotate-90 absolute top-10 bottom-16 -left-3 text-white w-40">
										こんにちは
									</p>
									<ArrowUpRight className="absolute text-white transition-all group-hover:scale-105 top-2 right-2 border border-white bg-black rounded-full p-1" />
								</div>
							</Link>
						</div>
						<div className="flex flex-col gap-3 w-full ">
							<div className="flex gap-2">
								<Link
									href="linkedin.com"
									className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#2867b2] w-full"
								>
									<Linkedin width={24} height={24} />
									<p className="text-[12px] text-white/90 -rotate-3">
										(I dont use it still 😵)
									</p>
								</Link>
								<Link
									href="https://x.com/proxyxd_s"
									className="hover:scale-95 duration-500 transform-gpu h-[4.125rem] flex flex-col justify-center items-center rounded-lg text-white bg-[#1c1d1f] w-full"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1em"
										height="1em"
										viewBox="0 0 24 24"
										className="text-2xl"
									>
										<path
											fill="currentColor"
											d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
										></path>
									</svg>
									<p className="text-[12px] text-white/55 ">(best social ;)</p>
								</Link>
							</div>
							<Link
								href="https://wakatime.com/"
								className="hover:scale-95 duration-500 transform-gpu"
							>
								<div className="h-[4.125rem] relative flex flex-col justify-center overflow-hidden items-center rounded-lg dark:text-white">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1.01em"
										height="1em"
										viewBox="0 0 256 254"
										className="absolute blur-sm text-[60px] top-0 left-0 -rotate-45 brightness-50"
									>
										<defs>
											<linearGradient
												id="logosVisualStudioCode0"
												x1="50%"
												x2="50%"
												y1="0%"
												y2="100%"
											>
												<stop offset="0%" stop-color="#FFF"></stop>
												<stop
													offset="100%"
													stop-color="#FFF"
													stop-opacity="0"
												></stop>
											</linearGradient>
											<path
												id="logosVisualStudioCode1"
												d="M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.507 91.695a15.853 15.853 0 0 0 5.464 3.571m10.464-183.649l-76.262 57.889l76.262 57.888z"
											></path>
										</defs>
										<mask id="logosVisualStudioCode2" fill="#fff">
											<use href="#logosVisualStudioCode1"></use>
										</mask>
										<path
											fill="#0065A9"
											d="M246.135 26.873L193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.938 15.938 0 0 0-9.024-14.36"
											mask="url(#logosVisualStudioCode2)"
										></path>
										<path
											fill="#007ACC"
											d="m246.135 226.816l-52.542 25.298a15.887 15.887 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.939 15.939 0 0 1-9.024 14.36"
											mask="url(#logosVisualStudioCode2)"
										></path>
										<path
											fill="#1F9CF0"
											d="M193.428 252.134a15.892 15.892 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.892 15.892 0 0 1 18.125-3.084l52.533 25.263a15.937 15.937 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363z"
											mask="url(#logosVisualStudioCode2)"
										></path>
										<path
											fill="url(#logosVisualStudioCode0)"
											fill-opacity=".25"
											d="M180.828 252.605a15.874 15.874 0 0 0 12.65-.486l52.5-25.263a15.938 15.938 0 0 0 9.026-14.363V41.197a15.939 15.939 0 0 0-9.025-14.363L193.477 1.57a15.877 15.877 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638l-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233l100.506 91.695a15.857 15.857 0 0 0 5.465 3.571m10.464-183.65l-76.262 57.89l76.262 57.888z"
											mask="url(#logosVisualStudioCode2)"
										></path>
									</svg>
									<span className="font-semibold items-center font-mono text-3xl -rotate-2">
										Ez
									</span>
									<span className="text-sm">coding stats</span>
									<span className="text-[10px]">(wakatime)</span>
								</div>
							</Link>
						</div>
					</div>
					<div className="cols-span-3">
						{/* <div className="p-1 flex h-36 flex-col gap-2 overflow-hidden rounded-xl mt-4">
							<div className="group flex gap-4 overflow-hidden flex-row"></div>
							<div className="group flex gap-4 overflow-hidden flex-row mt-2"></div>
						</div> */}
					</div>
				</div>
				<div className="col-span-3 md:ml-3">
					<div className="flex gap-3 ">
						<div className="w-32 h-36 text-white rounded-lg items-center flex justify-center overflow-hidden">
							<div className="items-center gap-[0.35rem] flex justify-center -rotate-12 relative">
								<svg
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="absolute text-blue-500/50 -z-50 w-40 h-40 -bottom-6 -rotate-45 brightness-50"
								>
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M5.07451 1.82584C5.03267 1.81926 4.99014 1.81825 4.94803 1.82284C4.10683 1.91446 2.82673 2.36828 2.07115 2.77808C2.02106 2.80525 1.97621 2.84112 1.93869 2.88402C1.62502 3.24266 1.34046 3.82836 1.11706 4.38186C0.887447 4.95076 0.697293 5.55032 0.588937 5.98354C0.236232 7.39369 0.042502 9.08728 0.0174948 10.6925C0.0162429 10.7729 0.0351883 10.8523 0.0725931 10.9234C0.373679 11.496 1.02015 12.027 1.66809 12.4152C2.32332 12.8078 3.08732 13.1182 3.70385 13.1778C3.85335 13.1922 4.00098 13.1358 4.10282 13.0255C4.2572 12.8581 4.5193 12.4676 4.71745 12.1643C4.80739 12.0267 4.89157 11.8953 4.95845 11.7901C5.62023 11.9106 6.45043 11.9801 7.50002 11.9801C8.54844 11.9801 9.37796 11.9107 10.0394 11.7905C10.1062 11.8957 10.1903 12.0269 10.2801 12.1643C10.4783 12.4676 10.7404 12.8581 10.8947 13.0255C10.9966 13.1358 11.1442 13.1922 11.2937 13.1778C11.9102 13.1182 12.6742 12.8078 13.3295 12.4152C13.9774 12.027 14.6239 11.496 14.925 10.9234C14.9624 10.8523 14.9813 10.7729 14.9801 10.6925C14.9551 9.08728 14.7613 7.39369 14.4086 5.98354C14.3003 5.55032 14.1101 4.95076 13.8805 4.38186C13.6571 3.82836 13.3725 3.24266 13.0589 2.88402C13.0214 2.84112 12.9765 2.80525 12.9264 2.77808C12.1708 2.36828 10.8907 1.91446 10.0495 1.82284C10.0074 1.81825 9.96489 1.81926 9.92305 1.82584C9.71676 1.85825 9.5391 1.96458 9.40809 2.06355C9.26977 2.16804 9.1413 2.29668 9.0304 2.42682C8.86968 2.61544 8.71437 2.84488 8.61428 3.06225C8.27237 3.03501 7.90138 3.02 7.5 3.02C7.0977 3.02 6.72593 3.03508 6.38337 3.06244C6.28328 2.84501 6.12792 2.61549 5.96716 2.42682C5.85626 2.29668 5.72778 2.16804 5.58947 2.06355C5.45846 1.96458 5.2808 1.85825 5.07451 1.82584ZM11.0181 11.5382C11.0395 11.5713 11.0615 11.6051 11.0838 11.6392C11.2169 11.843 11.3487 12.0385 11.4508 12.1809C11.8475 12.0916 12.352 11.8818 12.8361 11.5917C13.3795 11.2661 13.8098 10.8918 14.0177 10.5739C13.9852 9.06758 13.7993 7.50369 13.4773 6.21648C13.38 5.82759 13.2038 5.27021 12.9903 4.74117C12.7893 4.24326 12.5753 3.82162 12.388 3.5792C11.7376 3.24219 10.7129 2.88582 10.0454 2.78987C10.0308 2.79839 10.0113 2.81102 9.98675 2.82955C9.91863 2.881 9.84018 2.95666 9.76111 3.04945C9.71959 3.09817 9.68166 3.1471 9.64768 3.19449C9.953 3.25031 10.2253 3.3171 10.4662 3.39123C11.1499 3.6016 11.6428 3.89039 11.884 4.212C12.0431 4.42408 12.0001 4.72494 11.788 4.884C11.5759 5.04306 11.2751 5.00008 11.116 4.788C11.0572 4.70961 10.8001 4.4984 10.1838 4.30877C9.58933 4.12585 8.71356 3.98 7.5 3.98C6.28644 3.98 5.41067 4.12585 4.81616 4.30877C4.19988 4.4984 3.94279 4.70961 3.884 4.788C3.72494 5.00008 3.42408 5.04306 3.212 4.884C2.99992 4.72494 2.95694 4.42408 3.116 4.212C3.35721 3.89039 3.85011 3.6016 4.53383 3.39123C4.77418 3.31727 5.04571 3.25062 5.35016 3.19488C5.31611 3.14738 5.27808 3.09831 5.23645 3.04945C5.15738 2.95666 5.07893 2.881 5.01081 2.82955C4.98628 2.81102 4.96674 2.79839 4.95217 2.78987C4.28464 2.88582 3.25999 3.24219 2.60954 3.5792C2.42226 3.82162 2.20825 4.24326 2.00729 4.74117C1.79376 5.27021 1.61752 5.82759 1.52025 6.21648C1.19829 7.50369 1.01236 9.06758 0.97986 10.5739C1.18772 10.8918 1.61807 11.2661 2.16148 11.5917C2.64557 11.8818 3.15003 12.0916 3.5468 12.1809C3.64885 12.0385 3.78065 11.843 3.9138 11.6392C3.93626 11.6048 3.95838 11.5708 3.97996 11.5375C3.19521 11.2591 2.77361 10.8758 2.50064 10.4664C2.35359 10.2458 2.4132 9.94778 2.63377 9.80074C2.85435 9.65369 3.15236 9.71329 3.29941 9.93387C3.56077 10.3259 4.24355 11.0201 7.50002 11.0201C10.7565 11.0201 11.4392 10.326 11.7006 9.93386C11.8477 9.71329 12.1457 9.65369 12.3663 9.80074C12.5869 9.94779 12.6465 10.2458 12.4994 10.4664C12.2262 10.8762 11.8041 11.2598 11.0181 11.5382ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z"
										fill="currentColor"
									></path>
								</svg>
								<div className="text-xl font-semibold text-black dark:text-white">
									discord<p className="text-sm">(@proxiess)</p>
								</div>
							</div>
						</div>
						<a
							className="w-full h-36 hover:scale-95 transform-gpu duration-500 transition-all rounded-xl bg-gradient-to-r p-1 from-[#d0bfea] to-[#c7bcfb]  dark:from-[#342848] dark:to-[#6859aa]"
							href="/writing/2023"
						>
							<div className="relative  overflow-hidden flex flex-col justify-between h-full rounded-lg bg-[#f7f2f2] dark:bg-[#191919]">
								<div className="flex flex-col justify-between">
									<div className="px-4 py-2">
										<p className="text-xl font-semibold mb-3">Latest Post</p>
										<p className="w-full font-bold text-xl py-3 border-y dark:border-white/20 border-[#dbdbde]">
											No posts
										</p>
									</div>
								</div>
								<div>
									<div className="px-4 text-sm mb-2 text-[#a1a1aa]">
										<div className="12px">Date Invalid</div>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BentoHero;
