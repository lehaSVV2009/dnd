import { call, put, takeEvery } from 'redux-saga/effects'

import * as api from './API'
import * as HeroDucks from './ducks/hero'
import * as NotificationDucks from './ducks/notification'

function* loadHeroesRequest(action) {
  try {
    const { data } = yield call(api.fetchHeroes)
    yield put(HeroDucks.loadHeroesSuccess(data))
  } catch (error) {
    yield put(HeroDucks.loadHeroesFailure(error))
    yield put(NotificationDucks.showErrorNotification({ message: error }))
  }
}

function* deleteHeroRequest(action) {
  const { payload } = action
  const { id } = payload

  try {
    yield call(api.deleteHero, { id })
    yield put(HeroDucks.deleteHeroSuccess(payload))
    yield put(NotificationDucks.showSuccessNotification())
  } catch (error) {
    yield put(HeroDucks.deleteHeroFailure(error))
    yield put(NotificationDucks.showErrorNotification({ message: error }))
  }
}

export function* watchSaga() {
  yield [
    takeEvery(HeroDucks.LOAD_HEROES_REQUEST, loadHeroesRequest),
    takeEvery(HeroDucks.DELETE_HERO_REQUEST, deleteHeroRequest),    
  ]
}
  