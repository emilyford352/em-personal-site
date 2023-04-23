import styled from 'styled-components';

const StyledVideo = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
`;

const YouTubeVideo = ({id}) => {
    return (
        <StyledVideo>
            <iframe
                width="450"
                height="275"
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                title="Embedded youtube"
            />
        </StyledVideo>
    )
};

export default YouTubeVideo;
