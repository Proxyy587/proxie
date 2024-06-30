import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/blog";
import { formatDate } from "@/lib/format-date";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata | undefined> {
	let posts = await getBlogPosts();
	let post = posts.find((post) => post.slug === params.slug);
	if (!post) {
		return;
	}

	let {
		title,
		publishedAt: publishedTime,
		summary: description,
		image,
	} = post.metadata;
	let ogImage = image
		? `https://abhijee.com${image}`
		: `https://abhijee.com/api/og?title=${title}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "article",
			publishedTime,
			url: `https://abhijee.com/writing/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogImage],
		},
	};
}

export default async function Blog({
	params,
}: {
	readonly params: { slug: string };
}) {
	let posts = await getBlogPosts();
	let post = posts.find((post) => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	return (
		<section className="pt-8 pb-16">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "BlogPosting",
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: post.metadata.image
							? `https://abhijee.com${post.metadata.image}`
							: `https://abhijee.com/api/og?title=${post.metadata.title}`,
						url: `https://abhijee.com/writing/${post.slug}`,
						author: {
							"@type": "Person",
							name: "Abhijit Bhattacharjee",
						},
					}),
				}}
			/>
			<h1 className="title font-semibold text-3xl tracking-tighter max-w-[650px]">
				{post.metadata.title}
			</h1>
			<div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
				<p className="text-sm text-neutral-600 dark:text-neutral-400">
					{formatDate(post.metadata.publishedAt)}
				</p>
			</div>
			{post.metadata.bannerImage && (
				<Image
					src={post.metadata.bannerImage}
					alt={post.metadata.title}
					width={1280}
					height={520}
					className="!m-0 block  rounded-md object-cover object-center"
				/>
			)}
			<article className="prose prose-lg dark:prose-invert mt-8">
				<ReactMarkdown className={`prose prose-lg dark:prose-invert`}>
					{post.content}
				</ReactMarkdown>
			</article>
		</section>
	);
}
