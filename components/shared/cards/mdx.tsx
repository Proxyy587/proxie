import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

// Import Tailwind CSS styles

// Custom components if needed

// MDX function component
export default async function CustomMDX({ source }: { source: any }) {
	const mdxSource = await serialize(source);

	return (
		<article className="prose dark:prose-invert text-slate-600 dark:text-slate-300 font-light font-sans">
			{...source}
		</article>
	);
}
