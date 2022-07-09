import React, { createContext, useContext } from "react";
import jobs from "../data.json";
import { Job } from "../types";

const JobsContext = createContext<Job[] | undefined>(undefined);

export function JobsContextProvider({ children }: React.PropsWithChildren) {
  return <JobsContext.Provider value={jobs}>{children}</JobsContext.Provider>;
}

export function useJobsContext() {
  const values = useContext(JobsContext);

  if (!values)
    throw new Error(
      "useJobsContext must be used inside a JobsContextProvider with a value"
    );

  return values;
}
