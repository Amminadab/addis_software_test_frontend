import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const songs = createSlice({
  name: "songs",
  initialState: [
    {
      index: "0",
      title: "",
      artist: "",
      album: "",
      genre: "",
      _id: "",
    },
  ],
  reducers: {
    getSongsSlice: (state, action) => {
      state = action.payload;
      return state;
    },
    addSongSlice: (state, action: PayloadAction<any>) => {
      state.push(action.payload);
      return state;
    },
    editSongSlice: (state, action: PayloadAction<any>) => {
      state = state.map((song) =>
        song.index === action.payload.index ? action.payload : song
      );
      return state;
    },
    deleteSongSlice: (state, action: PayloadAction<any>) => {
      state = state.filter((song) => song.index !== action.payload);
      return state;
    },
  },
});

export const { getSongsSlice, addSongSlice, editSongSlice, deleteSongSlice } =
  songs.actions;

export default songs.reducer;
