import React, { useEffect, useState, useMemo } from "react";

const useVideos = (apiKey, channelId, url, playlists) => {
  const [data, setData] = useState(playlists);

  useMemo(() => {
    if (apiKey && channelId) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const updatedData = data.items.map((video) => video.id.videoId);
          setData(updatedData);
        });
    }
  }, [url]);

  return data;
};

export default useVideos;
