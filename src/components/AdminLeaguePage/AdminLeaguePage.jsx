
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import { useParams } from 'react-router-dom';


function AdminLeaguePage() {
    const history = useHistory()
    const dispatch = useDispatch();
    const params = useParams();
    const specificLeague = useSelector((store) => store.leaguePageReducer);
    const backToHome = () => {
      history.push("/");
    };
 console.log("Specific league",specificLeague);



 function onDelete(){
  dispatch({
    type: 'DELETE_LEAGUE',
    payload: params.id
});
// }, [params.id]);
  history.push(`/home`)
}
    

 
    useEffect(() => {
      dispatch({
          type: 'FETCH_LEAGUE',
          payload: params.id
      });
  }, [params.id]);

//    onDelete(() => {
//     dispatch({
//         type: 'DELETE_LEAGUE',
//         payload: params.id
//     });
// }, [params.id]);




  

  
    console.log("params.id",params.id)
    return (
      <div className="container">
        <div>
          <button onClick={() => backToHome()}> Back to Home </button>
          <h2>League Page</h2>
          {/* display photo, title and description */}
          
        <div key={specificLeague.id}> 
        <img src={specificLeague.photo}/>
        <h4>{specificLeague.sport}</h4>
        <p>{specificLeague.notes}</p>
        <a href={specificLeague.link}>{specificLeague.link}</a>

        <button onClick={() => onDelete()}>Delete</button>
        </div>
        </div>
      </div>
    );
  }
  
  export default AdminLeaguePage;