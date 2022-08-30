import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/Videos/VideosSlice";
import Spinner from "../Spinner/Spinner";
import VideoGridItem from "./VideoGridItem";

const VideosGrid = () => {
  const dispatch = useDispatch();
  const { isError, error, isLoading, videos } = useSelector(
    (state) => state.videos,
  );
  const { tags, search } = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchVideos({tags, search}));
  }, [dispatch, tags, search]);
  let content;
  if (isLoading) content = <Spinner />;

  if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;
  if (!isError && !isLoading && videos?.length === 0)
    content = <div className="col-span-12"> There is no videos</div>;
  if (!isError && !isLoading && videos?.length > 0)
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
};

export default VideosGrid;
