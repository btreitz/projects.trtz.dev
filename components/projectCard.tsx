import { GitHubIcon, GlobeIcon } from "./icons";

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
			className={`${className} group/card relative rounded-2xl p-4 pb-6 transition-all bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50`}
		>
			{/* Colored glow effect on hover */}
			<div
				style={{ backgroundColor: bgColor }}
				className="absolute w-16 h-16 -top-10 -left-10 blur-[100px] opacity-30 transition-all duration-700 group-hover/card:w-2/4 group-hover/card:h-2/4 group-hover/card:blur-[300px]"
			/>

			{/* Header with name and links */}
			<div className="border-b border-zinc-700/50 pb-2 flex flex-row justify-between">
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

			{/* Content: Description and Stack */}
			<div className="flex flex-row pt-4 gap-5">
				<div className="flex-1 z-10">
					{description && (
						<div>
							<div className="text-xl text-zinc-200">About</div>
							<div className="text-zinc-400 mt-2">{description}</div>
						</div>
					)}
				</div>
				<div className="flex-1 z-10">
					<div>
						{Object.entries(stack).map(([key, values]) => (
							<div className="mb-3" key={key}>
								<div className="font-bold text-lg mb-2 text-zinc-200" key={key}>
									{key}
								</div>
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
