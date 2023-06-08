import styled from 'styled-components';
import React from 'react';
import YouTubeVideo from "./YouTubeVideo";
import useVideos from "./useVideos";
const GridWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const StyledTitle = styled.div`
    text-align: center;
    padding: 10px;
    font-weight: 800;
    font-size: 20px;
`;

const VideoGrid = ({apiKey, channelId, title, playlistIds}) => {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3`;
    const youTubeData = useVideos(apiKey, channelId, url, playlistIds);

    if (youTubeData) {
        return (
            <>
                <StyledTitle>
                    {title}
                </StyledTitle>
                <GridWrapper>
                    {youTubeData.map((id) => <YouTubeVideo id={id} />)}
                </GridWrapper>
            </>
        )
    }

    return <></>;
};
export default VideoGrid;
