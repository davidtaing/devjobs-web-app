import styled from "styled-components";

const StyledDiv = styled.div`
  position: absolute;
  top: -25px;
  left: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: black;
  width: 50px;
  height: 50px;
  border-radius: 15px;
`;

interface Props {
  logo: string;
  company: string;
  logoBackground: string;
}

export function JobCardLogo({ logo, company, logoBackground }: Props) {
  return (
    <StyledDiv className="logo">
      <img src={logo} alt={company} />
    </StyledDiv>
  );
}
