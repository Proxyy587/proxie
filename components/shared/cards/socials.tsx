import { socialLinks } from "@/constant";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactSocial = () => {
	return (
		<div className="row-start-1 md:row-auto">
			{socialLinks.map((social) => (
				<Link
					key={social.name}
					href={social.url}
					target="_blank"
					className="group hover:border-sky-500 scale-100 hover:scale-95 shadow-white shadow-none hover:shadow-lg mb-3 row-start-3 flex flex-row items-center bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-zinc-800/20 dark:border cursor-pointer transition-all duration-300"
				>
					<social.icon className="w-5 h-5 font-bold" />
					<span className="font-medium text-sm text-black/80 dark:text-slate-400 mx-3">
						{social.name}
					</span>
					<ExternalLink className="w-4 h-4 text-zinc-800 dark:text-slate-400 group-hover:dark:text-slate-50 transition-all" />
				</Link>
			))}
		</div>
	);
};

export default ContactSocial;
