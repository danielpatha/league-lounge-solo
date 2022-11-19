import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';



//pass through movie id to SQL and get genre list
function* fetchLeaguePage(action){
    const id = action.payload
    console.log("action",action.payload)
    try {
        const league = yield axios.get(`/api/leaguePage/${id}`);
        console.log('get league:', league.data);
        
        //send to redux
        yield put({ type: 'SET_LEAGUE', payload: league.data });
    } 
    catch {
        console.log('LeaguePage GETTING error');
    }
}


function* deleteLeaguePage(action){
    const id = action.payload
    console.log("action",action.payload)
    try {
        const league = yield axios.delete(`/api/leaguePage/${id}`);
        console.log('Deleting league:', league.data);
        
        // send to redux
        yield put({ type: 'REMOVE_LEAGUE', payload: league.data });
    } 
    catch {
        console.log('LeaguePage GETTING error');
    }
}

function* leaguePageSaga() {
    //fetch the shelf from the server and send to redux at fetchShelf fn*
    yield takeEvery('FETCH_LEAGUE', fetchLeaguePage);
    yield takeEvery('DELETE_LEAGUE', deleteLeaguePage);
};

//export saga
export default leaguePageSaga;