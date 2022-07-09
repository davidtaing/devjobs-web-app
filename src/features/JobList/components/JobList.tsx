import styled from "styled-components";
import { useJobsContext } from "../../Jobs";
import { JobCard } from "./JobCard";

const StyledDiv = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-gap: 1.5rem;

  @media (min-width: 768px) and (max-width: 1439px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.5rem 0.6875rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2.5rem 1.875rem;
  }
`;

export function JobList() {
  const data = useJobsContext();

  return (
    <StyledDiv className="job-list wrapper">
      {data.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </StyledDiv>
  );
}
