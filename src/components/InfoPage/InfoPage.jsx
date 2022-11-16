//I'm not using this at the moment, the link used to appear when logged in. Might use it for something else.

import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <p>Info Page</p>
    </div>
  );
}

export default InfoPage;
