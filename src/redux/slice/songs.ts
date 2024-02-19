import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Song {
  index?: string;
  title?: string;
  artist?: string;
  album?: string;
  genre?: string;
  _id?: string;
}

interface SongsState {
  songs: Song[];
  isLoading: boolean;
}

const songs = createSlice({
  name: "songs",
  initialState: {
    songs: [],
    isLoading: false,
  } as SongsState,
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
    },

    getSongsSlice: (state, action: PayloadAction<any>) => {
      state.songs = action.payload;
      state.isLoading = false;
    },

    addSongSlice: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
    },
    editSongSlice: (state, action: PayloadAction<Song>) => {
      state.songs = state.songs.map((song) =>
        song._id === action.payload._id ? action.payload : song
      );
    },
    deleteSongSlice: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
    },
  },
});

export const {
  getSongsSlice,
  getSongsFetch,
  addSongSlice,
  editSongSlice,
  deleteSongSlice,
} = songs.actions;

export default songs.reducer;
