import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';



//pass through movie id to SQL and get genre list
function* searchLeague(action){
    const sport = action.payload
    console.log("action",action.payload)
    try {
        const league = yield axios.get(`/api/resultsPage/search/${sport}`);
        console.log('get league:', league.data);
        
        //send to redux
        yield put({ type: 'SET_RESULTS', payload: league.data });
    } 
    catch {
        console.log('LeaguePage GETTING error');
    }
}



function* ResultsPageSaga() {
    //fetch the shelf from the server and send to redux at fetchShelf fn*
    yield takeEvery('SEARCH_LEAGUE', searchLeague);
};

//export saga
export default ResultsPageSaga;