import { useParams, useHistory} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./EditPage.css";

function EditPage(){
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory()
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

    const backToLeaguePage = () => {
        history.push(`/league/${specificLeague.id}`);
      };


    const onSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'SAVE_LEAGUE',
            payload: specificLeague
        });
    }
    

    return(
        <div className = "editDiv">
        <button onClick={() => backToLeaguePage()}> Back to League Page </button>
            <h1> League: {specificLeague.league_city_name}</h1>
            <form onSubmit={onSubmit}>
            <input
                value={specificLeague.league_city_name}
                onChange={(evt) => dispatch({
                    type: 'UPDATE_EDIT_LEAGUE',
                    payload: { property: 'league_city_name', value: evt.target.value }
                })}
            />

         <input name="sport" list = 'sport'
                value={specificLeague.sport}
                onChange={(evt) => dispatch({
                    type: 'UPDATE_EDIT_LEAGUE',
                    payload: { property: 'sport', value: evt.target.value }
                })}
            /> 


         <input name="competitive_level" list = 'level'
                value={specificLeague.competitive_level}
                onChange={(evt) => dispatch({
                    type: 'UPDATE_EDIT_LEAGUE',
                    payload: { property: 'competitive_level', value: evt.target.value }
                })}

    
            /> 

         <input name="season" list = 'season'
                value={specificLeague.season}
                onChange={(evt) => dispatch({
                    type: 'UPDATE_EDIT_LEAGUE',
                    payload: { property: 'season', value: evt.target.value }
                })} 
            /> 
        <br></br>
        <br></br>
        <input name="day" list = 'day'
                value={specificLeague.day_of_the_week}
                onChange={(evt) => dispatch({
                    type: 'UPDATE_EDIT_LEAGUE',
                    payload: { property: 'day_of_the_week', value: evt.target.value }
                })} 
            />  

        <input name="time" list = 'time'
                value={specificLeague.time_of_day}
                onChange={(evt) => dispatch({
                    type: 'UPDATE_EDIT_LEAGUE',
                    payload: { property: 'time_of_day', value: evt.target.value }
                })} 
            />  

        <input name="co_ed" list = 'co_ed'
                value={specificLeague.co_ed}
                onChange={(evt) => dispatch({
                    type: 'UPDATE_EDIT_LEAGUE',
                    payload: { property: 'co_ed', value: evt.target.value }
                })} 
            />  
        <br></br>
        <br></br>

        <textarea className = "notes" name="notes" 
                value={specificLeague.notes}
                onChange={(evt) => dispatch({
                    type: 'UPDATE_EDIT_LEAGUE',
                    payload: { property: 'notes', value: evt.target.value }
                })} 
            ></textarea>  
        <input name="link" 
                value={specificLeague.link}
                onChange={(evt) => dispatch({
                    type: 'UPDATE_EDIT_LEAGUE',
                    payload: { property: 'link', value: evt.target.value }
                })} 
            />  

        <input name="photo"
                value={specificLeague.photo}
                onChange={(evt) => dispatch({
                    type: 'UPDATE_EDIT_LEAGUE',
                    payload: { property: 'photo', value: evt.target.value }
                })} 
            />  







    

            
            <button> Submit </button>
            </form>


<datalist id="sport" multiple>
<option value="Basketball"></option>
<option value="Bowling"></option>
<option value="Broomball"></option>
<option value="Cornhole/Bags"></option>
<option value="Dodgeball"></option>
<option value="Flag Football"></option>
<option value="Golf"></option>
<option value="Kickball"></option>
<option value="Pickleball"></option>
<option value="Soccer"></option>
<option value="Softball"></option>
<option value="Tennis"></option>
<option value="Ultimate Frisbee"></option>
<option value="Volleyball"></option>
</datalist>

<datalist id="level">
<option value="Social"></option>
<option value="Bronze/C"></option>
<option value="Silver/B"></option>
<option value="Gold/A"></option>
</datalist>

<datalist id="season">
<option value="Fall 2022"></option>
<option value="Winter 2022"></option>
<option value="Spring 2023"></option>
<option value="Summer 2023"></option>
<option value="Fall 2023"></option>
</datalist>

<datalist id="day">
<option value="Monday"></option>
<option value="Tuesday"></option>
<option value="Wednesday"></option>
<option value="Thursday"></option>
<option value="Friday"></option>
<option value="Saturday"></option>
<option value="Sunday"></option>
</datalist>   

<datalist id="time">
<option value="Morning"></option>
<option value="Afternoon"></option>
<option value="Evening"></option>
</datalist>

<datalist id="co_ed">
<option value="True"></option>
<option value="False"></option>
</datalist>   


</div>

    )
}






export default EditPage;