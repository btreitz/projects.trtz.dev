"use client";

import { motion } from "framer-motion";
import { GitHubIcon, LinkedInIcon } from "./icons";

/**
 * Glass-like curved footer with status indicator and social links.
 */
export default function Footer() {
	return (
		<motion.footer
			className="fixed bottom-0 left-0 right-0 z-20 w-full max-w-4xl mx-auto px-4"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.3 }}
		>
			<div className="flex items-center justify-between px-5 py-2.5 rounded-t-2xl bg-zinc-900/70 backdrop-blur-md border border-b-0 border-zinc-800/50">
				{/* Status indicator */}
				<a
					href="https://stats.uptimerobot.com/4Z2O7HYX74"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
				>
					<span className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
						<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
					</span>
					<span>Systems operational</span>
				</a>

				{/* Social links */}
				<div className="flex items-center gap-4">
					<a
						href="https://github.com/btreitz"
						target="_blank"
						rel="noopener noreferrer"
						className="text-zinc-500 hover:text-zinc-100 transition-colors"
						aria-label="GitHub"
					>
						<GitHubIcon className="size-5" />
					</a>
					<a
						href="https://linkedin.com/in/btreitz"
						target="_blank"
						rel="noopener noreferrer"
						className="text-zinc-500 hover:text-zinc-100 transition-colors"
						aria-label="LinkedIn"
					>
						<LinkedInIcon className="size-5" />
					</a>
				</div>
			</div>
		</motion.footer>
	);
}
