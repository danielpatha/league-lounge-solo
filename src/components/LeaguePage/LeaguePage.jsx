import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {useHistory, useParams} from 'react-router-dom'
import {LinkedinIcon, 
  LinkedinShareButton,
  EmailIcon, 
  EmailShareButton, 
  FacebookMessengerIcon, 
  FacebookMessengerShareButton,
  FacebookIcon, 
  FacebookShareButton,
   TwitterIcon, 
   TwitterShareButton,
   RedditShareButton,
   RedditIcon,
} from "react-share";

import "./LeaguePage.css"


function LeaguePage() {
    const history = useHistory()
    const dispatch = useDispatch();
    const params = useParams();
    const user = useSelector(store => store.user);
    const specificLeague = useSelector((store) => store.leaguePageReducer);

    const shareUrl = (specificLeague.link);
    const title = 'Checkout this league!';

    const backToHome = () => {
      history.push("/results");
    };
 console.log("Specific league",specificLeague);


 function onDelete(){
  dispatch({
    type: 'DELETE_LEAGUE',
    payload: params.id
});
  //dispatch({ type: 'FETCH_NEW_LEAGUE' }); Tried this to update what's on dom when deleting.
  history.push(`/home`)
}

function onEdit(){
  history.push(`/league/${specificLeague.id}/edit`)
}
    
    

 
    useEffect(() => {
      dispatch({
          type: 'FETCH_LEAGUE',
          payload: params.id
      });
  }, [params.id]);


console.log(specificLeague.co_ed)
  

  
    console.log("params.id",params.id)
    return (
      <div className="container">
        
        <div>
          <button onClick={() => backToHome()}> Back </button>
          <h2>{specificLeague.league_city_name}</h2>
          {/* display photo, title and description */}
          
        <div key={specificLeague.id}> 
        <img className="leaguePhoto"src={specificLeague.photo}/>
           
        <h2>SPORT: {specificLeague.sport}</h2>
        <h2>COMPETITIVE LEVEL: {specificLeague.competitive_level}</h2>
        <h2>DAY OF THE WEEK: {specificLeague.day_of_the_week}</h2>
        <h3>SEASON: {specificLeague.season}</h3>
        <h3>TIME OF DAY: {specificLeague.time_of_day}</h3>
        <h3>CO-ED: {String(specificLeague.co_ed) }</h3>
        
        
        <p>{specificLeague.notes}</p>
        <a href={specificLeague.link} target = "_blank" rel="noopener noreferrer">{specificLeague.link}</a>

    

        {/* All the SHARE buttons */}
        <div className = "flex-container">

        <h2> Share this league to others! </h2>
        <br></br>
        <div className = "flex-item">
        <FacebookShareButton
            url={shareUrl}
            quote={title}
            
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          </div>
          <div className="flex-item">
          <EmailShareButton
            url={shareUrl}
            subject={title}
            body="body"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
          </div>

        <div className = "flex-item">
          <LinkedinShareButton url={shareUrl} summary = {"Checkout this League! You down?"} className="Demo__some-network__share-button">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>

        <div className = "flex-item">
          <TwitterShareButton url={shareUrl} summary = {"Checkout this League! You down?"} className="Demo__some-network__share-button">
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>

        <div>
          <FacebookMessengerShareButton
            url={shareUrl}
            appId="521270401588372"
            className="flex-item"
          >
            <FacebookMessengerIcon size={32} round />
          </FacebookMessengerShareButton>
        </div>

        <div className = "flex-item">
          <RedditShareButton url={shareUrl} summary = {"Checkout this League! You down?"} className="Demo__some-network__share-button">
            <RedditIcon size={32} round />
          </RedditShareButton>
        </div>



        {user.id ?
        <>
            
              <button onClick={() => onDelete()}>Delete</button>
              <button onClick={() => onEdit()}>Edit</button>
              </>
              
              :
              // Otherwise, show the registration page
            <>
            
            </>
            }

        </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default LeaguePage;