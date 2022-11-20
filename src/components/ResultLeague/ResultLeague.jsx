import { useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom'
import "./ResultsLeague.css"
function ResultLeague({league}){
    const history = useHistory()
    const dispatch = useDispatch();

    function  getLeague(league){
        console.log("clicked", league.id)
        // dispatch({
        //     type: 'SET_LEAGUE',
        //     payload: {
        //         league
        //     }
        // })
        history.push(`/league/${league.id}`)
      }
return(
    <main className = "flexContainer">
    <div className = "flexItem">

    <img src={league.photo}/>

    <h3>{league.league_city_name}</h3>

    <h5> Sport: {league.sport} </h5>

    <p>Day(s):{league.day_of_the_week}</p>

 <button onClick={() => getLeague(league)}> Click For More Information</button>
    </div>
    </main>
    

)

}

export default ResultLeague;