import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  width: 100%;
  height: 80px;
  background-color: white;
  border-radius: 6px;
`;

export function SearchBar() {
  return (
    <div className="wrapper">
      <StyledInput type="text"></StyledInput>
    </div>
  );
}
