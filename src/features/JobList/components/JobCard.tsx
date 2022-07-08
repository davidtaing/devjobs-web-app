import styled from "styled-components";
import { Job } from "../types";
import { JobCardLogo } from "./JobCardLogo";

const StyledDiv = styled.div`
  display: block;
  margin-top: 1.5rem;
  width: 100%;
  height: 253px;

  .body {
    position: relative;
    background-color: white;
    height: 228px;
    border-radius: 6px;

    .content {
      padding: 3.0625rem 0.5625rem 2rem 2rem;
      width: 100%;
      height: 100%;

      > * {
        line-height: 1;
        margin: 0;
      }

      .position {
        margin-top: 1rem;
      }

      .company {
        margin-top: 0.75rem;
      }

      .location {
        margin-top: 2.5rem;
        color: var(--violet);
      }
    }
  }

  .oval {
    display: inline-block;
    margin-inline: 0.75rem;
    width: 0.25rem;
    height: 0.25rem;
    background-color: #6e8098;
    border-radius: 100%;
  }
`;

interface Props {
  job: Job;
}

export function JobCard({ job }: Props) {
  return (
    <StyledDiv className="job-card">
      <div className="body">
        <JobCardLogo
          logo={job.logo}
          company={job.company}
          logoBackground={job.logoBackground}
        />
        <div className="content">
          <div className="information">
            <span className="postedAt">{job.postedAt}</span>
            <div className="oval" />
            <span className="contract">{job.contract}</span>
          </div>
          <h3 className="position">{job.position}</h3>
          <p className="company">{job.company}</p>
          <h4 className="location">{job.location}</h4>
        </div>
      </div>
    </StyledDiv>
  );
}
