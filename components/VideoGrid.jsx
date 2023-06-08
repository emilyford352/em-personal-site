import styled from "styled-components";
import React from "react";
import YouTubeVideo from "./YouTubeVideo";
import useVideos from "./useVideos";
const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const VideoGrid = ({ apiKey, channelId, playlists }) => {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=3`;
  const youTubeData = useVideos(apiKey, channelId, url, playlists);

  if (youTubeData) {
    return (
      <GridWrapper>
        {youTubeData.map((video) => (
          <YouTubeVideo
            key={video?.playlistName}
            id={video?.playlistUrl || video}
            name={video?.playlistName}
          />
        ))}
      </GridWrapper>
    );
  }

  return <></>;
};
export default VideoGrid;
