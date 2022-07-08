import styled from "styled-components";

const StyledDiv = styled.div`
  display: inline-block;
  margin-inline: 0.75rem;
  width: 0.25rem;
  height: 0.25rem;
  background-color: #6e8098;
  border-radius: 100%;
`;

/** Little Circle Decal between Time Posted & Contract Type on the JobCard */
export function CircleSeparator() {
  return <StyledDiv className="oval" />;
}
