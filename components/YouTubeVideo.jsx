import styled from 'styled-components';

const YouTubeVideo = ({id}) => {
    return (
        <div>
            <iframe
                width="350"
                height="200"
                src={`https://www.youtube.com/embed/${id}`}
                frameBorder="0"
                title="Embedded youtube"
            />
        </div>
    )
};

export default YouTubeVideo;
