import React from "react";

const VideoPlayer = (props) => {
  return (
    <>
      <iframe
        width="100%"
        className="aspect-video"
        src={props?.link}
        title={props?.title}
        frameBorder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </>
  );
};

export default VideoPlayer;
