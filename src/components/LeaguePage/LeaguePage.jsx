
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import { useParams } from 'react-router-dom';


function LeaguePage() {
    const history = useHistory()
    const dispatch = useDispatch();
    const params = useParams()
    const specificLeague = useSelector((store) => store.leaguePageReducer);
    const backToHome = () => {
      history.push("/");
    };
 console.log("Specific league",specificLeague);
    useEffect(() => {
      dispatch({
          type: 'FETCH_LEAGUE',
          payload: params.id
      });
  }, [params.id]);
    console.log("params.id",params.id)
    return (
      <div className="container">
        <div>
          <button onClick={() => backToHome()}> Back to Home </button>
          <h2>League Page</h2>
          {/* display photo, title and description */}
          
        <div key={specificLeague[0].id}> 
        <img src={specificLeague[0].photo}/>
        <h2>{specificLeague[0].address}</h2>
        <h4>{specificLeague[0].sport}</h4>
        <p>{specificLeague[0].notes}</p>
        <a href={specificLeague[0].link}>{specificLeague[0].link}</a>
        </div>
        </div>
      </div>
    );
  }
  
  export default LeaguePage;