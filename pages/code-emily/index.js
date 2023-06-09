import PageWrapper from "../../components/PageWrapper";
import Paragraph from "../../components/Paragraph";
import React from "react";
import VideoGrid from "../../components/VideoGrid";
import styled from "styled-components";

const NewEpisodesBanner = styled.div`
  padding: 10px;
  font-size: 18px;
`;

export default function CodeEmily() {
  const playlists = [
    {
      playlistName: "Learn JavaScript",
      playlistUrl: "playlist?list=PLcWTAEgFyJYLqcy2RBM8RJr2kkdlwCAGR",
    },
    {
      playlistName: "Software Engineering Advice",
      playlistUrl: "playlist?list=PLcWTAEgFyJYKYlvF6qHMVasSeQ78-hh24",
    },
    {
      playlistName: "Learn React",
      playlistUrlName: "playlist?list=PLcWTAEgFyJYIGKVvEcqn8j_mJmbsSJGgT",
    },
  ];
  return (
    <div>
      <PageWrapper shouldRenderSecondNavBar={true}>
        <Paragraph>
          <div>
            Emily is a JavaScript enthusiast by day and comedian by night. She
            decided to turn her two favorite things into her passion project,
            Code Emily. She does JavaScript/React tutorials, gives tech advice
            and puts a humorous spin on it all.
          </div>
          <NewEpisodesBanner>New episodes every Monday!</NewEpisodesBanner>
        </Paragraph>
        <VideoGrid
          apiKey="AIzaSyDo1BN3bNrIFQholKinqN6x1j9_xwQvhQI"
          channelId="UCA8BgSxhyGyVkuxI3VP3Z7g"
        />
        <VideoGrid playlists={playlists} />
      </PageWrapper>
    </div>
  );
}
