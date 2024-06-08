import React from "react";

const AboutHero = () => {
	return (
		<div className="flex flex-col gap-16 dark:text-zinc-200">
			<section className="flex flex-col md:flex-row gap-1 md:gap-9">
				<h2 className="md:w-28 text-zinc-400 font-medium shrink-0 md:text-left">
					my story
				</h2>
				<div className="flex flex-col gap-6">
					<p>
						Hi 👋 I&apos;m Abhijit aka Proxy
						(internet nickname), I code sometimes ideally.
					</p>
					<p>
						I began my journey not too long ago. I was introduced to the world
						of coding by an ad by &quot;Chintu&quot;. I became curious because I was
						always passionate about computers and technology. I started watching
						YouTube videos on making games in JavaScript and created a few games
						like Pong and T-Rex Runner. At the time, I was just doing it for fun
						and wasn&apos;t very serious about coding, so I eventually stopped.
					</p>
					<p>
						In 2022, I was reintroduced to coding when I saw people freelancing
						and making money from it. In November, I earned my first 1800 INR by
						creating a Discord bot with Python. This motivated me to learn more,
						so I picked up web development, and then moved on to working with
						various technologies, libraries, and frameworks. I learned about
						backend operations, databases, scalability, and real-time
						communications.
					</p>
				</div>
			</section>

			<section className="flex flex-col md:flex-row gap-1 md:gap-9">
				<h2 className="md:w-28 text-zinc-400 font-medium shrink-0 md:text-left">
					tech i use
				</h2>
			</section>
		</div>
	);
};

export default AboutHero;
