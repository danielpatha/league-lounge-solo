const deleteLeagueReducer = (state = [], action) => {
    switch(action.type) {
        case 'REMOVE_LEAGUE':
            return action.payload;
    }

    return state;
}


export default deleteLeagueReducer;