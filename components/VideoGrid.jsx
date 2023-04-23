import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import YouTubeVideo from "./YouTubeVideo";

const GridWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const StyledTitle = styled.div`
    text-align: center;
    padding: 10px;
`;

const VideoGrid = ({apiKey, channelId, title, playlistIds}) => {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3`;
    const [youTubeData, setYouTubeData] = useState(null);

    useEffect(() => {
        if (apiKey && channelId) {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setYouTubeData(data.items);
                });
        }
    }, []);

    console.log(playlistIds);
    if (youTubeData || playlistIds) {
        const videoIds = youTubeData ? youTubeData.map((video) => video.id.videoId) : playlistIds;
        return (
            <>
                <StyledTitle>
                    {title}
                </StyledTitle>
                <GridWrapper>
                    {videoIds.map((id) => <YouTubeVideo id={id} />)}
                </GridWrapper>
            </>
        )
    }

    return <div>Loading</div>;
};

export default VideoGrid;
