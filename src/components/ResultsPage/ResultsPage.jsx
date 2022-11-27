import { useSelector } from "react-redux";
import React from 'react';
import ResultLeague from "../ResultLeague/ResultLeague";


function ResultsPage (){
    const results = useSelector((store) => store.ResultsPageReducer);
    console.log("results=", results);
    return(
        <div>
            <h1> Results </h1>
            
            <ul>
        {results.length === 0 && (<p> Sorry, we couldn't find leagues matching that criteria.</p>)}
        {results.map(league => {
            console.log(league);
          return (
          <ResultLeague
            league={league}
            key={league.id}
          />
          
          )
        })}
        </ul>
        
      </div>
    )
}

export default ResultsPage;