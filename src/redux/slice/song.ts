import { createSlice } from "@reduxjs/toolkit";

const song = createSlice({
  name: "song",
  initialState: {
    index: "0",
    title: "",
    artist: "",
    album: "",
    genre: "",
  },
  reducers: {
    setSongSlice: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setSongSlice } = song.actions;

export default song.reducer;
