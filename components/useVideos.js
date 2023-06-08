import React, { useEffect, useState, useMemo } from "react";

const useVideos = (apiKey, channelId, url, playlistIds) => {
    const [data, setData] = useState(playlistIds);

    useMemo(() => {
        if (apiKey && channelId) {
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    const updatedData = data.items.map((video) => video.id.videoId)
                    setData(updatedData);
                });
        }
    }, [url]);

    return data;
}

export default useVideos;