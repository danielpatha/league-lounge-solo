import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';



//pass through movie id to SQL and get genre list
function* fetchLeaguePage(league){
    try {
        console.log(league.payload.league.id)
        const league = yield axios.get(`/api/genre/${league.payload.league.id}`);
        console.log('get league:', league.data);
        
        //send to redux
        yield put({ type: 'SET_LEAGUE', payload: league.data });
    } 
    catch {
        console.log('LeaguePage GETTING error');
    }
}

function* leaguePageSaga() {
    //fetch the shelf from the server and send to redux at fetchShelf fn*
    yield takeEvery('SET_LEAGUE', fetchLeaguePage);
};

//export saga
export default leaguePageSaga;