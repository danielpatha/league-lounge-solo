const leagueReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_LEAGUE':
            return action.payload;
    }

    return state;
}


export default leagueReducer;