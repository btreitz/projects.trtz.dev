import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import FramerMotionDivWrapper from "./framerMotionDivWrapper";
import IconLink from "./iconLink";

export default function Header() {
	return (
		<div>
			<FramerMotionDivWrapper
				initial={{ scaleX: 0 }}
				animate={{ scaleX: 1 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<div className="border-b border-gray-400 dark:border-gray-300 pt-5 py-2 flex flex-row justify-between">
					<FramerMotionDivWrapper
						initial={{ opacity: 0, y: "-60px" }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7 }}
					>
						<div className=" text-2xl">projects.trtz.dev</div>
					</FramerMotionDivWrapper>
					<ul className="flex flex-row justify-center gap-1">
						<li key={0}>
							<FramerMotionDivWrapper
								initial={{ opacity: 0, y: "-60px" }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1 }}
							>
								<IconLink
									href="https://linkedin.com/in/btreitz"
									icon={
										<AiFillLinkedin
											size={"1.5em"}
											className={
												" group-hover:fill-cyan-500 dark:group-hover:fill-cyan-500 transition ease-out duration-200"
											}
										/>
									}
									style={{ display: "block" }}
									className={" group"}
								/>
							</FramerMotionDivWrapper>
						</li>
						<li key={1}>
							<FramerMotionDivWrapper
								initial={{ opacity: 0, y: "-60px" }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.1 }}
							>
								<IconLink
									href="https://github.com/btreitz"
									icon={
										<AiFillGithub
											size={"1.5em"}
											className={
												" group-hover:fill-cyan-500 dark:group-hover:fill-cyan-500 transition ease-out duration-200"
											}
										/>
									}
									style={{ display: "block" }}
									className={" group"}
								/>
							</FramerMotionDivWrapper>
						</li>
					</ul>
				</div>
			</FramerMotionDivWrapper>
		</div>
	);
}
