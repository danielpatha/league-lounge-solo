import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';



//pass through movie id to SQL and get genre list
function* saveLeague(action){
    // const id = action.payload
    // console.log("action",action.payload)
    // edit
    if (action.payload.id) {
        yield axios.put(`/api/league/${action.payload.id}/edit`, action.payload);
    }
    // add new
    else {
        yield axios.post(`/api/league/${action.payload.id}/edit`, action.payload)
    }
}


function* fetchEditLeague(action){
    const editLeagueData = action.payload
    console.log("action",action.payload)
    try {
        const response = yield axios.get(`/api/league/${editLeagueData}/edit`);

        yield put({
            type: 'SET_EDIT_LEAGUE',
            payload: response.data
        });
    }
    catch {
        console.log('LeaguePage GET error');
    }
}



function* editPageSaga() {
    //fetch the shelf from the server and send to redux at fetchShelf fn*
    yield takeEvery('FETCH_EDIT_LEAGUE', fetchEditLeague);
    yield takeEvery('SAVE_LEAGUE', saveLeague);


};

//export saga
export default editPageSaga;