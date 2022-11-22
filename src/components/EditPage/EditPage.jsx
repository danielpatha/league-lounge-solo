import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function EditPage(){
    const dispatch = useDispatch();
    const params = useParams();
    const specificLeague = useSelector((store) => store.editPageReducer);

    useEffect(() => {

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

    console.log('specificLeague =', specificLeague);

    return(
        <>
        <h1>Edit Page</h1>
        <h1> League/City Name: {specificLeague.league_city_name}</h1>
        <form>
            <input
                value={specificLeague.league_city_name}
                onChange={(evt) => dispatch({
                    type: 'UPDATE_EDIT_LEAGUE',
                    payload: { league_city_name: evt.target.value
                        season: evt.target.value
                    
                }
                })}
            />
            <button onClick={onSubmit}>Save</button>
            </form>
                
        </>

    )
}






export default EditPage;