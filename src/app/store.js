import { configureStore } from "@reduxjs/toolkit";
import TagsSlice from "../features/Tags/TagsSlice";
import VideosSlice from "../features/Videos/VideosSlice";

export const store = configureStore({
  reducer: {
    videos: VideosSlice,
    tags: TagsSlice,
  },
});
