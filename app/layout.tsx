import "./globals.css";

import { Metadata } from "next";
import { AnalyticsWrapper } from "../components/analytics";
import Footer from "../components/footer";
import Header from "../components/header";
import { InteractiveGridBackground } from "../components/interactiveGridBackground";

const WEB_URL = "https://projects.trtz.dev";

export const metadata: Metadata = {
	title: "projects.trtz.dev - Bastian Treitz",
	description: "Bastian Treitz - Software Developer - Some of my public projects",
	icons: {
		icon: "/images/trtz.png"
	},
	applicationName: "projects.trtz.dev",
	referrer: "origin-when-cross-origin",
	keywords: ["Bastian Treitz", "Next.js", "React", "TypeScript"],
	authors: [{ name: "Bastian Treitz", url: "https://linkedin.com/in/btreitz" }],
	creator: "Bastian Treitz",
	openGraph: {
		title: "projects.trtz.dev - Bastian Treitz",
		description: "Bastian Treitz - Software Developer - Some of my public projects",
		url: "https://projects.trtz.dev",
		siteName: "projects.trtz.dev",
		locale: "en-US",
		type: "website",
		images: [
			{
				url: `/images/trtz.png`,
				width: 100,
				height: 100
			}
		]
	},
	themeColor: "#09090b"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-zinc-950 text-zinc-100 min-h-screen">
				<InteractiveGridBackground />
				<Header />
				<div className="flex flex-col items-center pt-16 pb-16 min-h-screen">
					<div className="flex flex-col flex-grow justify-start gap-7 max-w-3xl w-full px-4">
						<main className="flex-grow">{children}</main>
					</div>
				</div>
				<Footer />
				<AnalyticsWrapper />
			</body>
		</html>
	);
}
