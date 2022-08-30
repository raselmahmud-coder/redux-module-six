import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/Pagination/Pagination";
import Footer from "../components/Footer/Footer";
import VideosGrid from "../components/VideosGrid/VideosGrid";

const Home = () => {
  return (
    <>
      <NavBar />
      <Tags />
      <VideosGrid />
      <Pagination />
      <Footer />
    </>
  );
};

export default Home;
