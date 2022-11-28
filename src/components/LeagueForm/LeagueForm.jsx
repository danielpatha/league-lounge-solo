import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import "./LeagueForm.css";
import { useDispatch, useSelector } from 'react-redux';

function LeagueForm(){
    const history = useHistory();
    const dispatch = useDispatch();
    const [sport, setSport] = useState('');
    const [level, setComp] = useState('');
    const [day, setDay] = useState('');
    const [sportMul, setSportMul] = useState('');
    const [levelMul, setCompMul] = useState('');
    const [dayMul, setDayMul] = useState('');
    
    
    const handleChangeSport=(evt) => {
     setSport(evt.target.value)
     console.log(evt)
    }
   
    const handleChangeComp=(evt) => {
      setComp(evt.target.value)
      console.log(evt)
     }

     const handleChangeDay=(evt) => {
      setDay(evt.target.value)
      console.log(evt)
     }
    
     const handleChangeSportMul=(evt) => {
      setSportMul(evt.target.value)
      console.log(evt)
     }
    
     const handleChangeCompMul=(evt) => {
       setCompMul(evt.target.value)
       console.log(evt)
      }
 
      const handleChangeDayMul=(evt) => {
       setDayMul(evt.target.value)
       console.log(evt)
      }
     


      function onSubmitSport(){
        console.log("sport",sport);
        dispatch({
          type: 'SEARCH_LEAGUE',
          payload: sport
      });
        history.push(`/results`)
      }
          
      function onSubmitLevel(){
        
        dispatch({
          type: 'SEARCH_LEVEL',
          payload: level
      });
        history.push(`/results`)
      }
          
      function onSubmitDay(){
        dispatch({
          type: 'SEARCH_DAY',
          payload: day
      });
        history.push(`/results`)
      }

      function onSubmitMul(){
        dispatch({
          type: 'SEARCH_MUL',
          payload: {sportMul,levelMul, dayMul}
      });
        history.push(`/results`)
      }


    return(
        <div>
        <form onSubmit = {onSubmitSport}>
        <label htmlFor="sport">
          Look up by sport:

        <input required name = "sport" className = "sportInput" value = {sport} onChange={(evt) => handleChangeSport(evt)} placeholder ="Sports" list = "sports"/>

<button className ="submit">search</button>
</label>
</form>

<form onSubmit = {onSubmitLevel}>
<label htmlFor="comp">
          Look up by competitive level:
<input required className = "sportInput" name ="comp" value = {level} onChange={(evt) => handleChangeComp(evt)} placeholder="Competitive Levels" list = "levels"></input>

<button className ="submit">search</button>
</label>
</form>

<form onSubmit={onSubmitDay}>
<label htmlFor="day">
          Look up by day of the week:
<input required className = "sportInput" name = "day" value = {day} onChange={(evt) => handleChangeDay(evt)} placeholder="Days of the Week" list = "day"></input>

<button className ="submit">search</button>
</label>
</form>

<br></br>
<form onSubmit={onSubmitMul}>
<label htmlFor="all">
          Look up by multiple fields:
          <input required name = "sport" className = "sportInput" value = {sportMul} onChange={(evt) => handleChangeSportMul(evt)} placeholder ="Sports" list = "sports"/>

          <input  required className = "sportInput" name ="comp" value = {levelMul} onChange={(evt) => handleChangeCompMul(evt)} placeholder="Competitive Levels" list = "levels"></input>
          
          <input required className = "sportInput" name = "all" value = {dayMul} onChange={(evt) => handleChangeDayMul(evt)} placeholder="Days of the Week" list = "day"></input>

<button className ="submit">submit</button>
</label>
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
<option value="Bronze or C"></option>
<option value="Silver or B"></option>
<option value="Gold or A"></option>
</datalist>

<datalist id="sports">
<option value="Basketball"></option>
<option value="Bowling"></option>
<option value="Broomball"></option>
<option value="Bean Bags/Corn Hole"></option>
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
</div>

    )
}

export default LeagueForm;