import { createContext, useContext } from "react";
import { Thread } from "../../types";

export const ThreadsContext = createContext<Thread[]>([]);

export const useThreadsContext = () => useContext(ThreadsContext);
