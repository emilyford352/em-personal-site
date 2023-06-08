import styled from "styled-components";

const StyledVideo = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  flex-direction: column;
`;

const StyledName = styled.div`
  text-align: center;
  padding: 10px;
`;

const YouTubeVideo = ({ id, name }) => {
  return (
    <StyledVideo>
      {name && <StyledName>{name}</StyledName>}
      <iframe
        width="450"
        height="275"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        title="Embedded youtube"
      />
    </StyledVideo>
  );
};

export default YouTubeVideo;
