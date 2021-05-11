import { put, takeEvery } from "redux-saga/effects";
import * as Effects from "redux-saga/effects";
import axios from "axios";
import { filmReducers } from "./reducer";

const call: any = Effects.call;

function* getFilmsList(action) {
  const {
    actions: { getFilms, errorMesage },
  } = filmReducers;
  try {
    const films = yield call(() =>
      axios({
        method: "GET",
        url: `http://www.omdbapi.com/?apikey=7a497777&s=${action.title}`,
      })
    );

    yield put(getFilms(films.data));
  } catch (e) {
    yield put(errorMesage(e.message));
  }
}

function* getOneFilm(action) {
  const {
    actions: { getOneFilm, errorMesage },
  } = filmReducers;
  try {
    const films = yield call(() =>
      axios({
        method: "GET",
        url: `http://www.omdbapi.com/?apikey=7a497777&i=${action.id}`,
      })
    );

    yield put(getOneFilm(films.data));
  } catch (e) {
    yield put(errorMesage(e.message));
  }
}

export default function* mySaga() {
  yield takeEvery("GET_FILMS", getFilmsList);
  yield takeEvery("GET_ONE_FILM", getOneFilm);
}
