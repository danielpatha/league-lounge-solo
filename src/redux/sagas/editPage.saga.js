import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


//fetch leagues with get request
function* fetchEditLeague(action){
    console.log('in fetchEditLeague SAGA');

    // get shelf from server via axios
    try{
        const league = yield axios.get(`/api/editpage/${action.payload}`);
        console.log(league.data);
        //send to redux
        yield put({
            type: 'SET_EDIT_LEAGUE',
            payload: league.data
        });

    } catch (err){
        //on error
        console.error('fetch Edit league failed:', err);
    };
}

function* saveLeague(action) {
    // edit
    console.log ("within the saveleague", action.payload)
    if (action.payload.id) {
        yield axios.put(`/api/editpage/${action.payload.id}`, action.payload);
    }
    // add new
    else {
        yield axios.post(`/api/editpage`, action.payload)
    }
}



function* editPageSaga() {
    //fetch the shelf from the server and send to redux at fetchShelf fn*
    yield takeEvery('FETCH_EDIT_LEAGUE', fetchEditLeague);
    yield takeEvery('SAVE_LEAGUE', saveLeague);

};

//export saga
export default editPageSaga;