import React from "react";
import SingleRelatedVideo from "./SingleRelatedVideo";

const RelatedVideos = ({ currentId, tags }) => {
  
  return (
    <>
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {/*  <!-- single related video --> */}
        <SingleRelatedVideo />
      </div>
    </>
  );
};

export default RelatedVideos;
