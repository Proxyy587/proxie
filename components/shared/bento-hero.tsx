"use client";

import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Commits from "./commits";
import DiscordCard from "./cards/discord";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import Terminal from "../ui/Terminal";
import { Button } from "../ui/button";
export const revalidate = 60;

const BentoHero = () => {
	return (
		<section className="md:mt-8 pb-8">
			<div className="grid md:grid-cols-6 grid-cols-3 mt-8 gap-3">
				<div className="col-span-3">
					<Link
						href={"/"}
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
						<Link href="/">
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
						src={"/animeroom.webp"}
						alt={""}
						width={500}
						height={500}
						className="blur-md absolute -bottom-3 -left-2 brightness-50"
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
										alt="wallpapaper"
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
									href="/"
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
						<Dialog>
							<DialogTrigger asChild>
								<Button
									aria-label="terminal"
									variant={"outline"}
									size={"sm"}
									className="dark:text-white"
								>
									Open Terminal
								</Button>
							</DialogTrigger>
							<DialogContent>
								<Terminal />
							</DialogContent>
						</Dialog>
					</div>
				</div>
				<div className="col-span-3 md:ml-3">
					<div className="flex gap-3 ">
						<DiscordCard />

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
