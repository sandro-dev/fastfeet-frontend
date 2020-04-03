import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', { email, password });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('dashboard');

    console.tron.log('Saga SIGNIN', response.data);
  } catch (error) {
    yield put(signInFailure());
    console.tron.error('error saga module auth', error);
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
