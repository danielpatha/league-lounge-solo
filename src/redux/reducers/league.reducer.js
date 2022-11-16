const leagueReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_LEAGUES':
            return action.payload;
    }

    return state;
}


export default leagueReducer;