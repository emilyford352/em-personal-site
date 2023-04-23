import styled from 'styled-components'
import SocialMediaIcon from './SocialMediaIcon';

const StyledWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	padding-top: 10px;
	@media only screen and (min-width: 1000px) {
		flex-direction: row;
		padding: 20px;
	}
	@media only screen and (max-width: 650px) {
		flex-direction: row;
		padding: inherit;
	}
`;

const IconButtonWrapper = ({icons = []}) => {
	return (
		<StyledWrapper>
			{icons.map((icon, index) => <SocialMediaIcon href={icon.href} icon={icon.icon} key={index} />)}
		</StyledWrapper>
	)
}

export default IconButtonWrapper;
