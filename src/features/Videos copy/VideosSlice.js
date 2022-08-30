import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./VideosAPI";
const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideos = createAsyncThunk("fetch/videos", async () => {
  const videos = await getVideos();
  return videos;
});

const videosSlice = createSlice({
  name: "video",
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
