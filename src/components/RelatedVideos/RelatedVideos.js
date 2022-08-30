import React, { useEffect } from "react";
import SingleRelatedVideo from "./SingleRelatedVideo";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchRelatedVideo } from "../../features/relatedVideos/relatedVideosSlice";
import Spinner from "../Spinner/Spinner";

const RelatedVideos = ({ currentId, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideo, error, isError, isLoading } = useSelector(
    (state) => state.relatedVideo,
  );
  console.log(relatedVideo);
  useEffect(() => {
    dispatch(fetchRelatedVideo(currentId, tags));
  }, [dispatch, currentId, tags]);
  // decide what to render
  let content = null;
  if (isLoading) content = <Spinner />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && relatedVideo?.length === 0)
    content = <div className="col-span-12">There is no related video</div>;
  if (!isLoading && !isError && relatedVideo?.length > 0)
    content = relatedVideo.map((video) => (
      <SingleRelatedVideo video={video} key={video.id} />
    ));

  return (
    <>
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {content}
      </div>
    </>
  );
};

export default RelatedVideos;
