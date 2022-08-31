import axiosInstance from "../../components/utils/axios";

export const getVideos = async (tags, search, pageNumber, limit) => {
  let queryString = "";
  if (tags.length > 0)
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  if (search !== "") queryString += `&q=${search}`;
  // const limit = 2;
  // const page = 1;
  const response = await axiosInstance.get(
    `/videos?_page=${pageNumber}&_limit=${limit}${queryString}`,
  );
  return response.data;
};
