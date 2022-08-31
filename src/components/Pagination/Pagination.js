import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axiosInstance from "../utils/axios";

const Pagination = () => {
  const [videos, setVideos] = useState([]);
  // getting the video length
  useEffect(() => {
    const getVideoLength = async () => {
      const response = await axiosInstance.get("/videos");
      setVideos(response.data);
    };
    getVideoLength();
  }, []);

  const perPageItem = 2;
  const totalPage = Math.ceil(videos?.length / perPageItem);
  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {videos.slice(0, totalPage)?.map((page, index) => (
          <NavLink
            key={index}
            to={index === 0 ? `/` : `/${index + 1}`}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-600"
              } px-4 py-1 rounded-full cursor-pointer
         `
            }>
            {/*  <div className="active:bg-blue-600 active:text-white bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">{ index+1}</div> */}
            {index + 1}
          </NavLink>
        ))}

        {/* 
        <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">2</div>
        <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">3</div>
        <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">4</div> */}
      </div>
    </section>
  );
};

export default Pagination;
