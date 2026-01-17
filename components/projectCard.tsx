import { GitHubIcon, GlobeIcon } from "./icons";
import { GlowingEffect } from "./glowingEffect";

type ProjectCardProps = {
	className?: string;
	name: string;
	description?: string;
	"github-url": string;
	url?: string;
	stack: {
		[key: string]: string[];
	};
	startedDate: string;
	bgColor: string;
};

const ProjectCard = ({
	className = "",
	name,
	description,
	"github-url": githubUrl,
	url,
	stack,
	startedDate,
	bgColor
}: ProjectCardProps) => {
	return (
		<div
			className={`${className} group/card relative rounded-2xl p-6 pb-8 transition-all bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50`}
		>
			{/* Cursor-following glow effect */}
			<GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} color={bgColor} />

			{/* Header with name and links */}
			<div className="border-b border-zinc-700/50 pb-4 flex flex-row justify-between">
				<div className="text-2xl z-10 text-zinc-100">
					{name}{" "}
					<span className="opacity-50 tablet:opacity-0 tablet:group-hover/card:opacity-50 transition-opacity duration-200 ease-in-out text-sm align-middle text-zinc-400">
						[{startedDate}]
					</span>
				</div>
				<ul className="flex flex-row justify-center gap-2 z-10">
					<li key={0}>
						<a
							href={githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="block p-1.5 rounded-lg text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800/50 transition-all"
							title="View Code"
						>
							<GitHubIcon className="size-5" />
						</a>
					</li>
					{url && (
						<li key={1}>
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								className="block p-1.5 rounded-lg text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800/50 transition-all"
								title="Visit Website"
							>
								<GlobeIcon className="size-5" />
							</a>
						</li>
					)}
				</ul>
			</div>

			{/* Content: Description and Stack (stacked layout) */}
			<div className="flex flex-col pt-6 gap-8 z-10">
				{/* Description - full width */}
				{description && (
					<div>
						<div className="text-xl text-zinc-200">About</div>
						<div className="text-zinc-400 mt-3">{description}</div>
					</div>
				)}

				{/* Tech Stack - grid layout for categories */}
				<div>
					<div className="text-xl text-zinc-200 mb-4">Tech Stack</div>
					<div className="grid grid-cols-2 tablet:grid-cols-3 gap-x-6 gap-y-5">
						{Object.entries(stack).map(([key, values]) => (
							<div key={key}>
								<div className="text-base text-zinc-400 mb-3">{key}</div>
								<div className="flex flex-row flex-wrap gap-2">
									{values.map((item) => {
										const linkMatch = /^(\[(.*)\]\((.*)\))/g.exec(item);
										const [label, link] = linkMatch
											? linkMatch.filter((_, i) => i === 2 || i === 3)
											: [undefined, undefined];
										return (
											<div
												className="px-2 py-1 rounded-md bg-zinc-800/70 text-zinc-300 hover:bg-zinc-700/70 transition-colors"
												key={item}
											>
												{linkMatch ? (
													<a
														href={link}
														target="_blank"
														rel="noreferrer"
														className="transition hover:underline underline-offset-2 hover:text-zinc-100"
													>
														{label}
													</a>
												) : (
													item
												)}
											</div>
										);
									})}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
