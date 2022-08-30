import React from "react";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/Pagination/Pagination";
import VideosGrid from "../components/VideosGrid/VideosGrid";

const Home = () => {
  return (
    <>
      <Tags />
      <VideosGrid />
      <Pagination />
    </>
  );
};

export default Home;
