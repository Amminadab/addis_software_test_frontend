import axios from "axios";
import { Filter } from "../interface/interface";

const apiUrl = import.meta.env.VITE_APP_API_URL;

export const getSongsAPI = async () => axios.get(`${apiUrl}/songs`);

export const getSongByIdAPI = async (id: number) =>
  axios.get(`${apiUrl}/songs/${id}`);

export const createSongAPI = async (song: Filter) => {
  const filteredSong = {
    album: song.album,
    artist: song.artist,
    genre: song.genre,
    title: song.title,
  };
  return axios.post(`${apiUrl}/songs`, filteredSong);
};

export const updateSongAPI = async (id: number, song: Filter) => {
  const filteredSong = {
    album: song.album,
    artist: song.artist,
    genre: song.genre,
    title: song.title,
  };
  return axios.patch(`${apiUrl}/songs/${id}`, filteredSong);
};

export const deleteSongAPI = async (_id: number) =>
  axios.delete(`${apiUrl}/songs/${_id}`);
