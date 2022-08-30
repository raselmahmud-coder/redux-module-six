import axiosInstance from "../../components/utils/axios";

export const getVideos = async () => {
  const response = await axiosInstance.get("/videos");
  return response.data;
};
