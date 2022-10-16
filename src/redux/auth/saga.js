import { put, all, takeEvery } from "redux-saga/effects";
import { history } from "../../index";

import actions from "./actions";

export function* LOGIN({ payload }) {
  yield put({
    type: actions,
    payload: {
      token: "acdeafbsdkasfavasjvbhbashdbaskdbask",
      isAuthencated: true,
      user: {
        libraryId: "1620EC1066",
      },
      formErrors: {},
    },
  });
  yield history.push("/dashboard");
}

export function* LOGOUT({ payload }) {
  yield put({
    type: actions,
    payload: {
      token: null,
      isAuthencated: false,
      user: {},
      formErrors: {},
    },
  });
  yield history.push("/");
}

export default function* authSaga() {
  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.LOGOUT, LOGOUT),
  ]);
}
