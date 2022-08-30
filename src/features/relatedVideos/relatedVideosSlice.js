import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideo } from "./relatedVideosAPI";
const initialState = {
  relatedVideo: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchRelatedVideo = createAsyncThunk("fetch/relatedVideo", async (id, tags) => {
  const relateVideo = await getRelatedVideo(id, tags);
  return relateVideo;
});

const relatedVideoSlice = createSlice({
  name: "relatedVideo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideo = action.payload;
      })
      .addCase(fetchRelatedVideo.rejected, (state, action) => {
        state.isError = true;
        state.relatedVideo = [];
        state.error = action.error?.message;
        state.isLoading = false;
      });
  },
});
export default relatedVideoSlice.reducer;
