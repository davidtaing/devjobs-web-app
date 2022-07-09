import { useRouter } from "next/router";
import styled from "styled-components";
import { Job } from "../../Jobs";
import { CircleSeparator } from "./CircleSeparator";
import { JobCardLogo } from "./JobCardLogo";

const StyledDiv = styled.div`
  display: block;
  margin-top: 1.5rem;
  width: 100%;
  height: 253px;

  :hover {
    .position {
      color: var(--text-secondary);
    }
  }

  .body {
    position: relative;
    background-color: var(--foreground);
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
        transition: color 0.1s;
        margin-top: 1rem;
      }

      .company {
        margin-top: 0.75rem;
      }

      .location {
        margin-top: 2.5rem;
        color: var(--text-action);
      }
    }
  }
`;

interface Props {
  job: Job;
}

export function JobCard({ job }: Props) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/jobs/${job.id}`);
  };

  return (
    <StyledDiv className="job-card" onClick={handleClick}>
      <div className="body">
        <JobCardLogo
          logo={job.logo}
          company={job.company}
          logoBackground={job.logoBackground}
        />
        <div className="content">
          <div className="information">
            <span className="postedAt">{job.postedAt}</span>
            <CircleSeparator />
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
