import React from "react";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

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

export default function AngryProject() {
  return (
    <Page>
      <StyledButton title="Click if angry" onClick={() => alert("I am angry!")}>
        click if angry
      </StyledButton>
    </Page>
  );
}
