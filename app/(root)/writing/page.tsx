import { getBlogPosts } from "@/lib/blog";
import { extractDate } from "@/lib/utils";
import { ArrowUpRight, Rss } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
	title: "My Thoughts",
	description: "Hi Im Proxy I develop User Interface for web applications",
};

const BlogPage = () => {
	let allBlogs = getBlogPosts();
	return (
		<>
			<div className="pb-10">
				<h1 className="heading pb-8">Writing</h1>
				<p>
					Some of my Life stories and Opinion on various Stuffs because I like
					controversies. Subscribe to{" "}
					<Link className="link mx-1 items-center" href="/rss.xml">
						RSS
						<Rss className="inline-flex mb-1 ml-1" width={16} height={16} />
					</Link>{" "}
					or follow on
					<a
						href="https://x.com/proxyxd_s"
						target="_blank"
						className="link mx-1"
					>
						Twitter
					</a>{" "}
					for updates.
				</p>
			</div>
			<section>
				{/* LINNKING MAP */}
				<section>
					<div className="flex flex-col items-start">
						{allBlogs
							.toSorted((a, b) => {
								if (
									new Date(a.metadata.publishedAt) >
									new Date(b.metadata.publishedAt)
								) {
									return -1;
								}
								return 1;
							})
							.map((post) => (
								<Link
									key={post.slug}
									aria-label={post.metadata.title}
									href={`/writing/${post.slug}`}
									className="group -mx-3 mt-2 flex w-full flex-col items-start gap-4 overflow-hidden rounded-lg px-3 py-2 transition-all duration-300 ease-in-out md:flex-row md:items-center md:hover:scale-95 md:hover:bg-hoverColor"
								>
									<div className="block shrink-0 md:w-[75px]">
										{post.metadata.bannerImage && (
											<Image
												src={post.metadata.bannerImage}
												alt={post.metadata.title}
												width={600}
												height={600}
												className="!m-0 block md:aspect-square rounded-md object-cover object-center"
											/>
										)}
									</div>
									<div className="flex flex-col items-start">
										<h2 className="flex items-center justify-between font-medium tracking-tight text-title group-hover:text-primary">
											<span>{post.metadata.title}</span>
											<ArrowUpRight className="ml-1 text-primary opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
										</h2>
										<p className="pt-0.5 text-sm font-normal text-muted-foreground">
											{post.metadata.summary}
										</p>
										<p className="pt-1.5 text-xs font-normal text-muted-foreground/90">
											{extractDate(post.metadata.publishedAt)}
										</p>
									</div>
								</Link>
							))}
					</div>
				</section>
				{/* <p className="text-gray-500">No blogs uploaded</p> */}
			</section>
		</>
	);
};

export default BlogPage;
