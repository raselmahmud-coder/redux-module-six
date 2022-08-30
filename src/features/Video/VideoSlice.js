import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./VideoAPI";
const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideo = createAsyncThunk("fetch/video", async (id) => {
  const video = await getVideo(id);
  return video;
});

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isError = true;
        state.video = {};
        state.error = action.error?.message;
        state.isLoading = false;
      });
  },
});
export default videoSlice.reducer;
