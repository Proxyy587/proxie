import moment from 'moment-timezone';

const Footer = () => {
	return (
		<footer className="flex flex-col font-medium text-zinc-700 dark:text-zinc-100 md:pt-0 pt-5">
			<hr className="w-full border-t border-zinc-150 dark:border-zinc-800" />
			<div className="flex items-center pt-2">
				<span className="inline-flex ">
					<div className="flex items-center pt-2">
                        <span>©️</span>
						<time className="hidden sm:inline">2024</time>
						<span className="text-zinc-300 dark:text-zinc-600">—</span>
						he
						<span className="text-zinc-300 dark:text-zinc-600">/</span>
						him
					</div>
				</span>
				<span className="ml-auto inline-flex gap-1.5">
					<span>⏲️</span>
                    <span>{moment().tz("Asia/Kolkata").format('h:mm a')}, Assam India</span>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
