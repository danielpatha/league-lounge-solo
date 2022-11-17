import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { useDispatch, useSelector } from 'react-redux';

// CUSTOM COMPONENTS
import LeagueForm from '../LeagueForm/LeagueForm';

function LandingPage() {
  //ORIGINAL
  const [heading, setHeading] = useState('Find a League Near You ');
  const leagueStore = useSelector(store => store.landingPageReducer)
  
  const history = useHistory();
  const dispatch = useDispatch();

  // const onLogin = (event) => {
  //   history.push('/login');
  // };

  useEffect(() => {
    dispatch({ type: 'FETCH_NEW_LEAGUE' });
}, []);

//send dispatch stating id and set movie
function  getLeague(league){
  console.log("clicked", league.id)
  dispatch({
      type: 'SET_LEAGUE',
      payload: {
          league
      }
  })
  history.push('/league')
}


  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
         <LeagueForm/>

    <h3>Newly Added Leagues</h3>

    <section className='flex-container'>
        
        {leagueStore.map(league => {
            return(
                <div className = 'flex-item' key = {league.id}>
                  <h4> {league.league_city_name}</h4>
                  <h5>{league.address}</h5>
                  <h6>{league.sport}</h6> 
                  <p>{league.day_of_the_week}</p>

                  <img src={league.photo} />
                  <button onClick={() => getLeague(league)}> Click For More Information</button>         
                  </div> 
            )

        })}
        

      </section>
   
        </div>
        <div className="grid-col grid-col_4">
          {/* Original Stuff */}
          {/* <RegisterForm /> */}
            
          {/* <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center> */}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
