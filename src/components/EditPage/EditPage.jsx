import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function EditPage(){
    const dispatch = useDispatch();
    const params = useParams();
    const specificLeague = useSelector((store) => store.editPageReducer);

 
    useEffect(() => {
        // Edit mode: fetch the student from the server
        if (params.id) {
            dispatch({
                type: 'FETCH_EDIT_LEAGUE',
                payload: params.id
            });
        }
    }, [params.id]);
    // 👆 re-run the fn every time the :id changes

    const onSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SAVE_LEAGUE',
            payload: specificLeague
        });
    }
    

    return(
        <>
            <h1> League: {specificLeague.league_city_name}</h1>
            <form onSubmit={onSubmit}>
            <input
                value={specificLeague.league_city_name}
                onChange={(evt) => dispatch({
                    type: 'UPDATE_EDIT_LEAGUE',
                    payload: { property: 'league_city_name', value: evt.target.value }
                })}
            />
            <button> Submit </button>
            </form>
        </>

    )
}






export default EditPage;