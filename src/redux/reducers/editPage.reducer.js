

const editPageReducer =(state = [], action)=>{
    switch (action.type){
        case 'SET_EDIT_LEAGUE':
            return action.payload;
        case 'UPDATE_EDIT_LEAGUE':
            return {
                ...state,
                [action.payload.property]: action.payload.value
            };
        default:
            return state;
    }
}


export default editPageReducer;