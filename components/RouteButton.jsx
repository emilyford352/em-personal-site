import styled from "styled-components";
import { useRouter } from "next/router";

const StyledButton = styled.button`
    font-family: 'SUNDAY', sans-serif;
    font-size: 50px;
    justify-content: center;
    height: 175px;
    border-radius: 30px;
    color: purple;
    border: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
    height: ${(props) => props.isHomePage ? '170' : '100'}px; 
    width: ${(props) => props.isHomePage ? '450' : '160'}px;
    font-size: ${(props) => props.isHomePage ? '50' : '18'}px;
    margin: ${(props) => props.isHomePage ? '30' : '10'}px;
    background-color: #${(props) => props.isSelected ? '1D9BF0' : 'ACE464'};
    @media only screen and (min-width: 1400px) {
        width: ${(props) => props.isHomePage ? '700' : '200'}px;
    }
    @media only screen and (max-width: 650px) {
        width: ${(props) => props.isHomePage ? '450' : '90'}px;
        height: ${(props) => props.isHomePage ? '170' : '80'}px; 
        font-size: ${(props) => props.isHomePage ? '50' : '15'}px;
    }
    :hover {
		background-color: white;
	}
`;

export default function RouteButton({title, route, isHomePage, isSelected}) {
    const router = useRouter();
    return (
        <StyledButton type="button" onClick={() => router.push(route)} isHomePage={isHomePage} isSelected={isSelected}>
            {title}
        </StyledButton>
    );
};