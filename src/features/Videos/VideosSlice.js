import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./VideosAPI";
const initialState = {
  videos: [],
  totalVideos: 0,
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideos = createAsyncThunk(
  "fetch/videos",
  async ({tags, search, pageNumber, limit }) => {
    const videos = await getVideos(tags, search, pageNumber, limit);
    return videos;
  },
);

const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
        state.totalVideos = action.payload.length;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isError = true;
        state.videos = [];
        state.error = action.error?.message;
        state.isLoading = false;
      });
  },
});
export default videosSlice.reducer;
