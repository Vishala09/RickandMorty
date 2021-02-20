import { all,fork } from "redux-saga/effects";
import {watchFetchImages} from  './fetchSaga';
import {watchRefreshImages} from  './fetchSaga';
export default function* rootSaga(){
    yield all([
        fork(watchFetchImages),
        fork(watchRefreshImages)
    ])
}