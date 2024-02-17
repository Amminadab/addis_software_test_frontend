import {
  createSongAPI,
  deleteSongAPI,
  getSongByIdAPI,
  getSongsAPI,
  updateSongAPI,
} from "../../../apis";

import {
  addSongSlice,
  deleteSongSlice,
  editSongSlice,
  getSongsFetch,
  getSongsSlice,
} from "../../slice/songs";
import { put, takeEvery } from "redux-saga/effects";

import {
  GET_SONGS,
  CREATE_SONG,
  DELETE_SONG_BY_ID,
  GET_SONG_BY_ID,
  UPDATE_SONG_BY_ID,
} from "../types";

export function* getSongsSaga(): Generator<any> {
  yield put(getSongsFetch());
  const songs = yield getSongsAPI();
  const songsData = songs as { data: any };
  yield put(getSongsSlice(songsData.data.data.songs));
}

export function* getSongByIdSaga(action: any): Generator<any> {
  yield getSongByIdAPI(action.id);
}

export function* createSongSaga(action: any): Generator<any> {
  yield createSongAPI(action.song);
  yield put(addSongSlice(action.song));
}

export function* updateSongSaga(action: any): Generator<any> {
  yield updateSongAPI(action.song.index, action.song);
  yield put(editSongSlice(action.song));
}

export function* deleteSongSaga(action: any): Generator<any> {
  yield deleteSongAPI(action.id);
  yield put(deleteSongSlice(action.id));
}

export function* watchSongsAsync(): Generator<any> {
  yield takeEvery(GET_SONGS, getSongsSaga);
  yield takeEvery(CREATE_SONG, createSongSaga);
  yield takeEvery(GET_SONG_BY_ID, getSongByIdSaga);
  yield takeEvery(UPDATE_SONG_BY_ID, updateSongSaga);
  yield takeEvery(DELETE_SONG_BY_ID, deleteSongSaga);
}
