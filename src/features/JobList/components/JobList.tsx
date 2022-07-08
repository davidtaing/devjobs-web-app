import styled from "styled-components";
import data from "../../../data.json";
import { JobCard } from "./JobCard";

const StyledDiv = styled.div`
  padding-top: 2rem;
`;

export function JobList() {
  return (
    <StyledDiv className="job-list">
      <div className="wrapper">
        {data.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </StyledDiv>
  );
}
