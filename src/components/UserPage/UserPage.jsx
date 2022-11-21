import {useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import './UserPage.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  //const specificLeague = useSelector((store) => store.leaguePageReducer);
  const [city, setCity] = useState("")
  const [sport, setSport] = useState("")
  return (
    <>
    <h2>Welcome, {user.username}!</h2>

    <div className="usercontainer">
      

      

       <h3 className = 'flex-item1' >Favorites</h3>



      <form>

      <input name="city" type="text" value={city} placeholder="League City" onChange={(e) => setCity(e.target.value)} />
      <input name="sport" type="text" value={sport} placeholder="League Sport" onChange={(e) => setSport(e.target.value)} />
      <button onClick={() => {
        dispatch({
          type: 'ADD_LEAGUE',
          payload: {
            league_city_name: city,
            sport: sport
          }
      })
      //Clear the form
      setCity("")
      setSport("")
       }}>Add a League</button>
      </form>
      
       

       <h3 className = 'flex-item2'>Profile Picture</h3> 


      {/* From Original */}
      {/* <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" /> */}
    </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
