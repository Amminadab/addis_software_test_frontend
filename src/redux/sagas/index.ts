import { all } from "redux-saga/effects";
import { watchSongsAsync } from "./types/song";

export function* rootSaga() {
  yield all([watchSongsAsync()]);
}
