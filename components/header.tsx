"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLinkIcon, GitHubIcon, LinkedInIcon } from "./icons";

/**
 * Glass-like curved header with logo, AI Chat link, and social links.
 */
export default function Header() {
	return (
		<motion.header
			className="fixed top-0 left-0 right-0 z-20 w-full max-w-4xl mx-auto px-4"
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.3 }}
		>
			<div className="flex items-center justify-between px-5 py-2.5 rounded-b-2xl bg-zinc-900/70 backdrop-blur-md border border-t-0 border-zinc-800/50 font-mono">
				{/* Logo and Title */}
				<a href="#" className="flex items-center gap-3 cursor-pointer">
					<Image
						src="/images/logo.webp"
						alt="logo"
						width={32}
						height={32}
						className="rounded-lg transition-all hover:scale-105"
					/>
					<span className="text-sm text-zinc-200">Projects - trtz.dev</span>
				</a>

				{/* AI Chat link and Social links */}
				<div className="flex items-center gap-5">
					<a
						href="https://trtz.dev"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
					>
						<ExternalLinkIcon className="size-4" />
						<span>AI Chat</span>
					</a>

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
			</div>
		</motion.header>
	);
}
