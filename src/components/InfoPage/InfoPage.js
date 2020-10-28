import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <>
  <div>
    <p>New User Page</p>
  </div>
  <div> 
    <input type='text' placeholder='Name' />
    <input type='text' placeholder='Phone #' />
    <input type='text' placeholder='e-mail address' />
    <input type='text' placeholder='User Name' />
    <input type='text' placeholder='password' />
  </div>
  </>
);

// If you needed to add local state or other things,
// you can make it a class component like:

/*
class InfoPage extends React.Component {

  render() {
    return (
      <div>
        <p>Info Page</p>
      </div>
    )
  }
}
*/
export default InfoPage;
