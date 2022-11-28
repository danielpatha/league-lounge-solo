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
        <p>League Lounge is a.... Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,ed do eiusmod tempor magna aliqua. </p>

      </div>
    </div>
  );
}

export default AboutPage;
