import React from "react";
import VideoDescription from "../components/Description/VideoDescription";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import RelatedVideos from "../components/RelatedVideos/RelatedVideos";

const VideoDetails = () => {
  return (
    <>
      <NavBar />
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <VideoDescription />
            <RelatedVideos />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default VideoDetails;
