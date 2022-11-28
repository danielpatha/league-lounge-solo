import { useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import "./ResultLeague.css"
function ResultLeague({league}){
    const history = useHistory()
    const results = useSelector((store) => store.ResultsPageReducer);
   

    function  getLeague(league){
        console.log("clicked", league.id)
        history.push(`/league/${league.id}`)
      }
return(
    <section className='grid-container'>
        
            <div className = 'grid-item1' key = {league.id}>
              <h4>{league.league_city_name} </h4>
              
              <p>SPORT:    
                
                
                {league.sport}</p> 
              
              <p> COMPETITIVE LEVEL:   {league.competitive_level}</p>
              
              <p>DAY:    {league.day_of_the_week}</p>

              <img src={league.photo} />
              <br></br>
              <button className = "moreInfo" onClick={() => getLeague(league)}> click to learn more!</button>         
              </div> 


    
    

  </section>



//     ???????
//     <main className = "flex-containerResult">
        
//     <div className = "flexItem">

//     <img src={league.photo}/>

//     <h4>{league.league_city_name}</h4>

//     <p> SPORT:   {league.sport} </p>
    
//     <p> COMPETITIVE LEVEL:    {league.competitive_level}</p>

//     <p>DAY:     {league.day_of_the_week}</p>

//  <button onClick={() => getLeague(league)}> Click For More Information</button>
//     </div>
//     </main>
    

)

}

export default ResultLeague;