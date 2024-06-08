import { Rss } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
	title: "My Thoughts",
	description: "Hi Im Proxy I develop User Interface for web applications",
};

const BlogPage = () => {
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
				<a href="https://x.com/proxyxd_s" target="_blank" className="link mx-1">
					Twitter
				</a>{" "}
				for updates.
			</p>
		</div>
    </>
	);
};

export default BlogPage;
