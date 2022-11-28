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

//pass through movie id to SQL and get genre list
function* searchLevel(action){
    const level = action.payload
    console.log("action",action.payload)
    try {
        const league = yield axios.get(`/api/level/${level}`);
        console.log("league", league);
        console.log('get league:', league.data);
        
        //send to redux
        yield put({ type: 'SET_RESULTS', payload: league.data });
    } 
    catch {
        console.log('LeaguePage GETTING error');
    }
}


function* searchDay(action){
    const day = action.payload
    console.log("action",action.payload)
    try {
        const league = yield axios.get(`/api/day/${day}`);
        console.log('get league:', league.data);
        
        //send to redux
        yield put({ type: 'SET_RESULTS', payload: league.data });
    } 
    catch {
        console.log('LeaguePage GETTING error');
    }
}

function* searchMul(action){
    const sport = action.payload.sportMul
    const level = action.payload.levelMul
    const day = action.payload.dayMul
    console.log("action",action.payload)
    try {
        const league = yield axios.get(`/api/mul/${sport}/${level}/${day}`);
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
    yield takeEvery('SEARCH_LEVEL', searchLevel);
    yield takeEvery('SEARCH_DAY', searchDay);
    yield takeEvery('SEARCH_MUL', searchMul);
    
    

};

//export saga
export default ResultsPageSaga;