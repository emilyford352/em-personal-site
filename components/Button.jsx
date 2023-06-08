import styled from "styled-components";
import { useRouter } from "next/router";

const StyledButton = styled.button`
  font-family: "BIG SHOT", sans-serif;
  font-size: 50px;
  justify-content: center;
  height: 175px;
  border-radius: 30px;
  color: purple;
  color: ${(props) => (props.isSelected ? "white" : "purple")};
  border: none;
  padding: 5px;
  cursor: pointer;
  outline: inherit;
  height: ${(props) => (props.isHomePage ? "170" : "100")}px;
  width: 300px;
  font-size: ${(props) => (props.isHomePage ? "50" : "18")}px;
  margin: ${(props) => (props.isHomePage ? "30" : "10")}px;
  background-color: #${(props) => (props.isSelected ? "1D9BF0" : "ACE464")};
  :hover {
    background-color: white;
    color: purple;
  }
`;

export default function RouteButton({ title, isHomePage, isSelected }) {
  return (
    <StyledButton type="button" isHomePage={isHomePage} isSelected={isSelected}>
      {title}
    </StyledButton>
  );
}
