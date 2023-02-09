import React from 'react';
import "./AboutPage.css";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2 className = "aboutHeader">About</h2>
        <h4>MinneLeagues is a user-friendly website devoted to the inner athlete and competitor in all of us. <br></br> 
        Here users can search adult recreational sport leagues across the Twin Cities and beyond all in one place, which streamlines the traditional process.<br></br> 
        Users can find leagues that fir their busy schedules by searching using a multitude of criteria, like sport, competitive level, and day of the week.<br></br>  
        Users can also read information about the leagues, share it with others or themselves, and click an external link where they can sign up.<br></br> </h4>

        

        <h4 className = "underline">Technologies Used</h4>
        <p>HTML</p> 
        <p>CSS</p> 
        <p>JavaScript</p>
        <p>Node.js</p> 
        <p>React</p> 
        <p>SQL</p> 
        <p>Redux</p> 
        <p>Saga</p> 
        <p>Figma</p> 

        <p>React-Share</p> 
       
       <h4 className = "underline"> Special Thanks </h4>
      My friends and family for being supporting and understanding.
      My girlfriend Jess for being there for me.
      And the Ramirez cohort for their support.

      <h4 className = "underline"> Connect With Me Here! </h4>


       

      </div>
    </div>
  );
}

export default AboutPage;
