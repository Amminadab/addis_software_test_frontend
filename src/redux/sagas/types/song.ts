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
import { call, put, takeEvery } from "redux-saga/effects";

import {
  GET_SONGS,
  CREATE_SONG,
  DELETE_SONG_BY_ID,
  GET_SONG_BY_ID,
  UPDATE_SONG_BY_ID,
} from "../types";
import toast from "react-hot-toast";

export function* getSongsSaga(): Generator<any> {
  try {
    yield put(getSongsFetch());
    const songs = yield getSongsAPI();
    const songsData = songs as { data: any };
    yield put(getSongsSlice(songsData.data.data.songs));
  } catch (error: any) {
    yield toast.error(error?.response?.data?.message);
  }
}

export function* getSongByIdSaga(action: any): Generator<any> {
  yield getSongByIdAPI(action.id);
}

export function* createSongSaga(action: any): Generator<any> {
  try {
    const response: any = yield call(createSongAPI, action.song);
    yield put(addSongSlice(response?.data?.data?.song));
    yield toast.success(response?.data?.message);
  } catch (error: any) {
    toast.error(error?.response?.data?.message);
  }
}

export function* updateSongSaga(action: any): Generator<any> {
  try {
    const response: any = yield updateSongAPI(action.song._id, action.song);
    yield put(editSongSlice(action.song));
    yield toast.success(response?.data?.message);
  } catch (error: any) {
    yield toast.error(error?.response?.data?.message);
  }
}

export function* deleteSongSaga(action: any): Generator<any> {
  try {
    const response: any = yield deleteSongAPI(action.id);
    yield put(deleteSongSlice(action.id));
    yield toast.success(response?.data?.message);
  } catch (error: any) {
    yield toast.error(error?.response?.data?.message);
  }
}

export function* watchSongsAsync(): Generator<any> {
  yield takeEvery(GET_SONGS, getSongsSaga);
  yield takeEvery(CREATE_SONG, createSongSaga);
  yield takeEvery(GET_SONG_BY_ID, getSongByIdSaga);
  yield takeEvery(UPDATE_SONG_BY_ID, updateSongSaga);
  yield takeEvery(DELETE_SONG_BY_ID, deleteSongSaga);
}
