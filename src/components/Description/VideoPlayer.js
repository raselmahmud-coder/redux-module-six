import React from "react";
import "./player.css"
const VideoPlayer = (props) => {
  return (
    <>
      <iframe
        width="100%"
        className="aspect-video"
        src={props?.link}
        title={props?.title}
        frameBorder="2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </>
  );
};

export default VideoPlayer;
