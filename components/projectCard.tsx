import { AiFillGithub } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import IconLink from "./iconLink";

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
			className={`${className} group/card rounded-xl pb-6 dark:border dark:border-gray-800 p-4 transition bg-white dark:bg-gradient-to-t dark:from-dark-bg dark:to-gray-800`}
		>
			<div
				style={{ backgroundColor: bgColor }}
				className={` absolute w-16 h-16 -top-10 -left-10 blur-[100px] opacity-30 transition-all duration-700 group-hover/card:w-2/4 group-hover/card:h-2/4  group-hover/card:blur-[300px]`}
			/>
			<div className=" border-b border-gray-400 dark:border-gray-300 pb-2 flex flex-row justify-between">
				<div className="text-2xl z-10">
					{name}{" "}
					<span className=" opacity-50 tablet:opacity-0 tablet:group-hover/card:opacity-50 transition-opacity duration-200 ease-in-out text-sm align-middle">
						[{startedDate}]
					</span>
				</div>
				<ul className="flex flex-row justify-center gap-1 z-10">
					<li key={0} className={" group/links"}>
						<IconLink
							href={githubUrl}
							icon={
								<AiFillGithub
									size={"1.5em"}
									className={
										" group-hover/links:fill-cyan-500 dark:group-hover/links:fill-cyan-500 transition ease-out duration-200"
									}
								/>
							}
							title={" Checkout <Code />"}
							style={{ display: "block" }}
						/>
					</li>
					{url && (
						<li key={1} className={" group/links"}>
							<IconLink
								href={url}
								icon={
									<FaGlobeAmericas
										size={"1.5em"}
										className={
											" group-hover/links:fill-cyan-500 dark:group-hover/links:fill-cyan-500 transition ease-out duration-200"
										}
									/>
								}
								title={"Website"}
								style={{ display: "block" }}
							/>
						</li>
					)}
				</ul>
			</div>
			<div className=" flex flex-row pt-4 gap-5">
				<div className=" flex-1 z-10">
					{description && (
						<div>
							<div className=" text-xl">About</div>
							<div className=" dark:text-gray-400 text-gray-600 mt-2">{description}</div>
						</div>
					)}
				</div>
				<div className=" flex-1 z-10">
					<div>
						{Object.entries(stack).map(([key, values]) => (
							<div className=" mb-3" key={key}>
								<div className=" font-bol text-lg mb-2" key={key}>
									{key}
								</div>
								<div className=" flex flex-row flex-wrap gap-2">
									{values.map((item) => {
										const linkMatch = /^(\[(.*)\]\((.*)\))/g.exec(item);
										const [label, link] = linkMatch
											? linkMatch.filter((_, i) => i === 2 || i === 3)
											: [undefined, undefined];
										return (
											<div
												className=" px-2 py-1 rounded-md bg-cyan-500 hover:bg-opacity-80 dark:bg-cyan-900 dark:hover:bg-cyan-800"
												key={item}
											>
												{linkMatch ? (
													<a
														href={link}
														target="_blank"
														rel="noreferrer"
														className=" transition hover:underline underline-offset-2 dark:hover:text-white"
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
