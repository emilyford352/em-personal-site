import styled from 'styled-components';

const StyledParagraph = styled.div`
    text-align: center;
    font-size: 18px;
    padding: 20px 20px 0px;
    @media only screen and (max-width: 650px) {
        padding: 20px;
        font-size: 16px;
    }
    @media only screen and (min-width: 1000px) {
        padding: 20px 100px 0px;
    }
`

const Paragraph = ({children}) => {
    return (
        <StyledParagraph>
            {children}
        </StyledParagraph>
    )
};

export default Paragraph;
