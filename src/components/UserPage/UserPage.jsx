import {useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useDispatch, useSelector} from 'react-redux';
import './UserPage.css';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  //const specificLeague = useSelector((store) => store.leaguePageReducer);
  const [league_city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [sport, setSport] = useState("")
  const [comp, setComp] = useState("")
  const [season, setSeason] = useState("")
  const [day, setDay] = useState("")
  const [time, setTime] = useState("")
  const [co_ed, setCo_ed] = useState("")
  const [notes, setNotes] = useState("")
  const [link, setLink] = useState("")
  const [photo, setPhoto] = useState("")

  function autofill(){
   setCity('St.Paul');
   setAddress('1151 Jessamine Ave W, St Paul, MN 55103');
   setNotes('The City of Saint Paul offers Mens, Womens and Co-Rec Broomball. Registration begins in November. League play for all teams begins in late December and runs through early February, weather permitting. Teams can elect to participate in a postseason double-elimination tournament for an extra fee. All games are played at McMurray Fields.');
   setLink('https://www.stpaul.gov/departments/parks-and-recreation/athletics/adult-athletics/adult-broomball');
   setPhoto('https://cdn.minnesotamonthly.com/wp-content/uploads/sites/85/2018/12/mm-2019-01_True-North_Broomball_G20copy.jpg')

  }

  return (
    <>
    <h2 onClick= {autofill} >Welcome, {user.username}!</h2>

    <div className="usercontainer">
       {/* <h3 className = 'flex-item1' >Favorites</h3> */}

      <form>
   
      <input name="league_city_name" type="text" value={league_city} placeholder="League City/Name" onChange={(e) => setCity(e.target.value)} />
      
      <input name="address" type="text" value={address} placeholder="League Address" onChange={(e) => setAddress(e.target.value)} />
      
      <input name="sport" list = "sport" type="text" value={sport} placeholder="League Sport" onChange={(e) => setSport(e.target.value)} />
      
      <input name="comp" list = "level" type="text" value={comp} placeholder="Competitive Level" onChange={(e) => setComp(e.target.value)} />
      
       <input name="season" list = "season" type="text" value={season} placeholder="Season" onChange={(e) => setSeason(e.target.value)} />
      
        <input name="day_of_the_week" list = "day" type="text" value={day} placeholder="Day of the Week" onChange={(e) => setDay(e.target.value)} />
      
       <input name="time_of_day" list = "time" type="text" value={time} placeholder="Time of Day" onChange={(e) => setTime(e.target.value)} />
      
        <input name="co_ed" list = "co_ed" type="text" value={co_ed} placeholder="Co-Ed Available?" onChange={(e) => setCo_ed(e.target.value)} />
      
        <input name="notes" className = "notes"  type="text" value={notes} placeholder="Notes" onChange={(e) => setNotes(e.target.value)} /> 

        <input name="link" className = "link"  type="text" value={link} placeholder="Link" onChange={(e) => setLink(e.target.value)} />

        <input name="photo" className = "photo"  type="text" value={photo} placeholder="Photo" onChange={(e) => setPhoto(e.target.value)} />   
     
      <button onClick={() => {
        dispatch({
          type: 'ADD_LEAGUE',
          payload: {
            league_city_name: league_city,
            address: address,
            sport: sport,
            competitive_level: comp,
            season: season,
            day_of_the_week: day,
            time_of_day: time,
            co_ed: co_ed,
            notes: notes,
            link: link,
            photo: photo,
          }
      })
      //Clear the form
      setCity("")
      setSport("")
      setAddress("")
      setComp("");
      setSeason("");
      setDay("");
      setTime ("");
      setCo_ed("");
      setNotes("");
      setLink("");
      setPhoto("");
       }}>Add a League</button>
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

       {/* <h3 className = 'flex-item2'>Profile Picture</h3>  */}


      {/* From Original */}
      {/* <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" /> */}
    </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
