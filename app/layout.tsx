import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import SmoothScrolling from "@/components/providers/SmoothScroll";
import Image from "next/image";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
	title: "Abhijit Bhattacharjee",
	description: "Hi Im Proxy I develop User Interface for web applications",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body className={poppins.className}>
					<div className="absolute top-0 left-0 md:-top-1/2 md:left-1/2 z-[-1000] -translate-x-1/2 -translate-y-1/2 lg:scale-100 w-full opacity-60">
						<Image
							src="/gradient.svg"
							alt="Gradient"
							width={750}
							height={750}
							className="object-cover w-full"
						/>
					</div>
					<SmoothScrolling>
						<ThemeProvider
							attribute="class"
							defaultTheme="system"
							enableSystem
							disableTransitionOnChange
						>
							{children}
						</ThemeProvider>
					</SmoothScrolling>
				</body>
			</html>
		</>
	);
}
