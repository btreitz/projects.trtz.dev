import "./globals.css";

import { Metadata } from "next";
import { AnalyticsWrapper } from "../components/analytics";
import Footer from "../components/footer";
import Header from "../components/header";

const WEB_URL = "https://projects.trtz.dev";

export const metadata: Metadata = {
	title: "projects.trtz.dev - Bastian Treitz",
	description: "Bastian Treitz - Software Developer - Personal website about some of my public projects",
	icons: {
		icon: "/images/trtz.png",
	},
	applicationName: "projects.trtz.dev",
	referrer: "origin-when-cross-origin",
	keywords: ["Bastian Treitz", "Next.js", "React", "TypeScript"],
	authors: [{ name: "Bastian Treitz", url: "https://linkedin.com/in/btreitz" }],
	colorScheme: "dark light",
	creator: "Bastian Treitz",
	openGraph: {
		title: "projects.trtz.dev - Bastian Treitz",
		description: "Bastian Treitz - Software Developer - Personal website about some of my public projects",
		url: "https://projects.trtz.dev",
		siteName: "projects.trtz.dev",
		locale: "en-US",
		type: "website",
		images: [
			{
				url: `/images/trtz.png`,
				width: 100,
				height: 100,
			},
		],
	},
	themeColor: "#0b101b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="dark bg-dark-bg">
			<body>
				<div className=" min-h-screen bg-light-bg dark:bg-dark-bg dark:text-light-beige flex flex-col items-center transition-colors">
					<div className=" flex flex-col flex-grow justify-start gap-7 desktop:max-w-3xl laptop:w-8/12 tablet:w-9/12 phone:w-11/12">
						<Header />
						<main className=" flex-grow">{children}</main>
						<Footer />
					</div>
				</div>
				<AnalyticsWrapper />
			</body>
		</html>
	);
}
