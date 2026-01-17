"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CloseIcon, ExternalLinkIcon, FileTextIcon, GitHubIcon, LinkedInIcon, MenuIcon } from "./icons";

/**
 * Glass-like curved header with logo, AI Chat link, and social links.
 * Responsive: shows burger menu on mobile, full nav on tablet+.
 */
export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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

				{/* Desktop Navigation - hidden on mobile */}
				<div className="hidden tablet:flex items-center gap-5">
					<a
						href="https://drive.google.com/file/d/1O4VQaYh5GpHBv2Jz4s4IMW2mB0sbP1nW/view?usp=drive_link"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
					>
						<FileTextIcon className="size-4" />
						<span>Resume</span>
					</a>

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

				{/* Mobile Menu Button - visible only on mobile */}
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="tablet:hidden p-2 -mr-2 text-zinc-400 hover:text-zinc-200 transition-colors"
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				>
					{isMenuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
						className="tablet:hidden mt-2 mx-0 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800/50 font-mono overflow-hidden"
					>
						<div className="flex flex-col p-4 gap-4">
							<a
								href="https://drive.google.com/file/d/1O4VQaYh5GpHBv2Jz4s4IMW2mB0sbP1nW/view?usp=drive_link"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-200 transition-colors py-2"
								onClick={() => setIsMenuOpen(false)}
							>
								<FileTextIcon className="size-5" />
								<span>Resume</span>
							</a>

							<a
								href="https://trtz.dev"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-sm text-zinc-400 hover:text-zinc-200 transition-colors py-2"
								onClick={() => setIsMenuOpen(false)}
							>
								<ExternalLinkIcon className="size-5" />
								<span>AI Chat</span>
							</a>

							<div className="border-t border-zinc-800/50 pt-4 flex items-center gap-6">
								<a
									href="https://github.com/btreitz"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition-colors"
									onClick={() => setIsMenuOpen(false)}
								>
									<GitHubIcon className="size-5" />
									<span className="text-sm">GitHub</span>
								</a>
								<a
									href="https://linkedin.com/in/btreitz"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-3 text-zinc-400 hover:text-zinc-100 transition-colors"
									onClick={() => setIsMenuOpen(false)}
								>
									<LinkedInIcon className="size-5" />
									<span className="text-sm">LinkedIn</span>
								</a>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}
