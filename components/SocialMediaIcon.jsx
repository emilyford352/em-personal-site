import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const StyledLink = styled(Link)`
	color: purple;
	flex: 1;
	text-decoration: none;
	text-align: center;
	:hover {
		color: black;
	}
	:visited {
		text-decoration: none;
	}
	@media only screen and (max-width: 650px), (min-width: 1000px) {
		display: inline-flex;
		vertical-align: middle;
		justify-content: center;
	}
`

const Icon = styled(FontAwesomeIcon)`
	width: 60px;
	@media only screen and (max-width: 1000px) {
		width: 80px;
	}
	@media only screen and (max-width: 650px) {
		width: 70px;
	}
`;

const SocialMediaIcon = ({href, icon}) => {
    return (
        <StyledLink href={href} target='_blank'>
            <Icon icon={icon} />
        </StyledLink>
    )
}

export default SocialMediaIcon;