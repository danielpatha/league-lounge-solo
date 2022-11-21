const ResultsPageReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_RESULTS':
            return action.payload;
    }

    return state;
}


export default ResultsPageReducer;