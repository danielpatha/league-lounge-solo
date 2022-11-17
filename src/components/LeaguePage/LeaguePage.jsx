import React from 'react';

import { useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'


function LeaguePage() {
    const history = useHistory()
    const specificLeague = useSelector((store) => store.leaguePageReducer);
    const backToHome = () => {
      history.push("/");
    };


    
    return (
      <div className="container">
        <div>
          <button onClick={() => backToHome()}> Back to Home </button>
          <h2>League Page</h2>
          {/* display photo, title and description */}
        <div key={specificLeague.league.id}> 
        <img src={specificLeague.league.photo}/>
        <h2>{specificLeague.league.address}</h2>
        <h4>{specificLeague.league.sport}</h4>
        <p>{specificLeague.league.notes}</p>
        <a href={specificLeague.league.link}>{specificLeague.league.link}</a>
        </div>
        </div>
      </div>
    );
  }
  
  export default LeaguePage;