import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';


//fetch leagues with get request
function* fetchLeagues(){
    console.log('in fetchShelf SAGA');

    // get shelf from server via axios
    try{
        const league = yield axios.get('/api/league');

        //send to redux
        yield put({
            type: 'SET_LEAGUES',
            payload: league.data
        });

    } catch (err){
        //on error
        console.error('in fetchShelf SAGA error:', err);
    };
}



function* leagueSaga() {
    //fetch the shelf from the server and send to redux at fetchShelf fn*
    yield takeEvery('FETCH_NEW_LEAGUE', fetchLeagues);

};

//export saga
export default leagueSaga;