import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

function* getPostSaga(action) {
  // 파라미터로 action을 받아오면 액션의 정보를 조회할 수 있습니다.
  try {
    // call을 사용하면 Promise를 반환하는 함수를 호출하고, 기다릴 수 있습니다.
    // 첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수입니다.
    const post = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/posts/${action.payload}`
    );
    yield put({ type: GET_POST_SUCCESS, payload: post.data });
  } catch (e) {
    yield put({ type: GET_POST_FAILURE, payload: e, error: true });
  }
}
function* getUsersSaga(action) {
  try {
    const users = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users`
    );
    yield put({ type: GET_USERS_SUCCESS, payload: users.data });
  } catch (e) {
    yield put({ type: GET_USERS_FAILURE, payload: e, error: true });
  }
}

export function* sampleSaga() {
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: true,
  },
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST]: (state) => ({
      ...state,
      loading: { ...state.loading, GET_POST: true },
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      loading: { ...state.loading, GET_POST: false },
      post: action.payload,
    }),
    [GET_POST_FAILURE]: (state, action) => ({
      ...state,
      loading: { ...state.loading, GET_POST: false },
    }),
    [GET_USERS]: (state) => ({
      ...state,
      loading: { ...state.loading, GET_USERS: true },
    }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      loading: { ...state.loading, GET_USERS: false },
      users: action.payload,
    }),
    [GET_USERS_FAILURE]: (state, action) => ({
      ...state,
      loading: { ...state.loading, GET_USERS: false },
    }),
  },
  initialState
);

export default sample;
