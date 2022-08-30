import { configureStore } from "@reduxjs/toolkit";
import VideosSlice from "../features/Videos/VideosSlice";

export const store = configureStore({
  reducer: {
    videos: VideosSlice,
  },
});
