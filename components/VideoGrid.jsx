import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import YouTubeVideo from "./YouTubeVideo";

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 10px;
    justify-items: center;
    padding: 0px 15px;
`;

const StyledTitle = styled.h3`
    text-align: center;
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
        console.log(videoIds);
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
