import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="container">
    <div>
      <p>Items Detail Page</p>
    </div>
    <div>
      <p>Image</p>
      <p>Image Location</p>
      <p>Name</p>
      <p>Model #</p>
      <p>Details</p>
      <p>Location</p>
    </div>
    <div>
      <p>Button location</p>
    </div>
  </div>
);

export default AboutPage;
