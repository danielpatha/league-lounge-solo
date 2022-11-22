// hold only the single student object being edited
const editPageReducer = (state  = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_LEAGUE':
            return action.payload;
        case 'UPDATE_EDIT_LEAGUE':
            return {
                ...state,
                ...action.payload
            };
    };

    return state;
}

export default editPageReducer;