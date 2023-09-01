import { PropsWithChildren, useEffect, useState } from "react";
import { Thread } from "../../types";
import { generateThreads } from "../helpers/seed";
import { ThreadsContext } from "../hooks/useThreadsContext.hook";

export const ThreadsContextWrapper = ({
	children,
}: PropsWithChildren): JSX.Element => {
	const [threads, setThreads] = useState<Thread[]>([]);

	useEffect(() => {
		const randomThreads = generateThreads();
		setThreads(randomThreads);
	}, []);

	return (
		<ThreadsContext.Provider value={threads}>
			{children}
		</ThreadsContext.Provider>
	);
};
