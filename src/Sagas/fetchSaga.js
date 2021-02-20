import axios from 'axios';
import { act } from 'react-dom/cjs/react-dom-test-utils.development';
import { takeEvery,call,put } from 'redux-saga/effects'

function getImages(action){
    console.log('page',action.payload.page)
    return axios.get("https://rickandmortyapi.com/api/character/?name=rick&page="+action.payload.page)
    .then((res)=>{
         return res.data.results
     })   
}

function* fetchImagesWorker(action) {
    try{
     const payload=action.payload;
     const images=yield call(getImages,{payload})
     console.log('fetching images in saga',payload)
     yield put({type:'GET_IMAGES',images:images})
    }
    catch(e)
    {
        console.log(e)
    }

}


function* watchFetchImages() {
    yield takeEvery('GET_IMAGES_SAGA', fetchImagesWorker)
  }
  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function* refreshImagesWorker(action) {
    try{
     let payload=action.payload;
     const images=yield call(getImages,{payload})
     //console.log('refreshing images in saga',payload)
     payload={'images':images,'name':action.payload.name}
     yield put({type:'REFRESH_IMAGES',payload:payload})
    }
    catch(e)
    {
        console.log(e)
    }

}

function* watchRefreshImages() {
    yield takeEvery('REFRESH_IMAGES_SAGA', refreshImagesWorker)
  }

export  {watchFetchImages,watchRefreshImages}