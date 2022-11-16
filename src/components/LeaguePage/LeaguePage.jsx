import React from 'react';
import { useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'


function LeaguePage() {
    const history = useHistory()
    const specificLeague = useSelector((store) => store.leaguePageReducer);

    
    return (
      <div className="container">
        <div>
          <h2>League Page</h2>
          {/* display photo, title and description */}
        <div key={specificLeague.league.id}> 
        <img src={specificLeague.league.photo}/>
        <h2>{specificLeague.league.address}</h2>
        <h4>{specificLeague.league.sport}</h4>
        </div>
        </div>
      </div>
    );
  }
  
  export default LeaguePage;