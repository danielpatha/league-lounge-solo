import { useSelector } from "react-redux";
import React from 'react';
import ResultLeague from "../ResultLeague/ResultLeague";
import './ResultsPage.css'


function ResultsPage (){
    const results = useSelector((store) => store.ResultsPageReducer);
    console.log("results=", results);
    return(
        <div className = 'container'>
            <h1 className="header1"> Results </h1>
            
            <section>
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
        </section>
        
      </div>
    )
}

export default ResultsPage;