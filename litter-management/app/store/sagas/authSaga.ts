import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { loginRequest, loginSuccess, loginFailure } from '../authSlice';

interface LoginAction {
    type: string;
    payload: {
        username: string;
        password: string;
    };
}

interface ResponseData {
    data: any; // Replace `any` with the actual data type if known
}

function* loginSaga(action: LoginAction) {
    try {
        const { username, password } = action.payload;
        const response: ResponseData = yield call(axios.post, `http://192.168.0.137:8000/api/v1/auth/login?username=${username}&password=${password}`);
        yield put(loginSuccess(response.data));
    } catch (error: any) {
        error = error.response.data;
        yield put(loginFailure(error.detail));
    }
}

function* watchLoginSaga() {
  yield takeLatest(loginRequest.type, loginSaga);
}

export default watchLoginSaga;
