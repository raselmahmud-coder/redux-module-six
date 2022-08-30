import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoDescription from "../components/Description/VideoDescription";
import RelatedVideos from "../components/RelatedVideos/RelatedVideos";
import { fetchVideo } from "../features/Video/VideoSlice";
import Spinner from "../components/Spinner/Spinner";

const VideoDetails = () => {
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const { video, error, isError, isLoading } = useSelector(
    (state) => state.video,
  );
  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);
  const { tags } = video || {};
  let content = null;
  if (isLoading) content = <Spinner />;
  if (!isLoading && isError)
    content = <div className="text-red-500 col-span-12">{error}</div>;
  if (!isError && !isLoading && !video?.id)
    content = <div>There is no Video loaded</div>;
  if (!isError && !isLoading && video?.id)
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <VideoDescription video={video} />
        <RelatedVideos currentId={videoId} tags={ tags} />
      </div>
    );
  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </>
  );
};

export default VideoDetails;
