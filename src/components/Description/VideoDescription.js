import React from "react";
import LikeUnlike from "./LikeUnlike";
import VideoPlayer from "./VideoPlayer";

const VideoDescription = ({ video }) => {
  const { link, title, date, likes, unlikes, description } = video || {};
  return (
    <>
      <div className="col-span-full w-full space-y-8 lg:col-span-2">
        <VideoPlayer link={link} title={title} />

        <div>
          <h1 className="text-lg font-semibold tracking-tight text-slate-800">
            {title}
          </h1>
          <div className="pb-4 flex items-center space-between border-b">
            <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
              Uploaded on {date}
            </h2>

            <LikeUnlike likes={likes} unlikes={unlikes} />
          </div>

          <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDescription;
