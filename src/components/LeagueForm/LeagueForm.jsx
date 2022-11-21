import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

function LeagueForm(){
    const history = useHistory();
    const dispatch = useDispatch();
    const [sport, setSport] = useState('');
    
    
    const handleChange=(evt) => {
     setSport(evt.target.value)
     console.log(evt)
    }
   
    

      function onSubmit(){
        console.log("sport",sport);
        dispatch({
          type: 'SEARCH_LEAGUE',
          payload: sport
      });
        history.push(`/results`)
      }
          

    return(
        <div>
        <form>
        {/* <input placeholder="League/City Name"></input>
        <input  placeholder="Address"></input> */}

        <input value = {sport} onChange={(evt) => handleChange(evt)} placeholder ="Sports ⬇" list = "sports"/>

        {/* <input placeholder="Competitive Level ⬇" list = "levels"></input>
        <br></br>
        <input placeholder="Season ⬇" list = "season"></input>
        <input placeholder="Day of the Week ⬇" list = "day"></input>
        <input placeholder="Time of Day ⬇" list = "time"></input>
        <input placeholder="Co-Ed ⬇" list="co-ed"></input> */}


<button onClick={() => onSubmit()}>Submit</button>

</form>


<datalist id="co-ed">
<option value="True"></option>
<option value="False"></option>
</datalist>    

<datalist id="time">
<option value="Morning"></option>
<option value="Afternoon"></option>
<option value="Evening"></option>
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

<datalist id="season">
<option value="Fall 2022"></option>
<option value="Winter 2022"></option>
<option value="Spring 2023"></option>
<option value="Summer 2023"></option>
<option value="Fall 2023"></option>
</datalist>

<datalist id="levels">
<option value="Social"></option>
<option value="Bronze/C"></option>
<option value="Silver/B"></option>
<option value="Gold/A"></option>
</datalist>

<datalist id="sports">
<option value="Basketball"></option>
<option value="Bowling"></option>
<option value="Softball"></option>
<option value="Volleyball"></option>
</datalist>
</div>

    )
}

export default LeagueForm;