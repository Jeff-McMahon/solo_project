import React from 'react';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
class InfoPage extends React.Component {


  render () {
    return (
  <>
  <div>
    <p>New item page! Please enter in a new item to your collection.</p>
  </div>
  <div> 
    <input type='text' placeholder='Item Name' />
    <input type='text' placeholder='Item Model' />
    <input type='text' placeholder='Item Detail' />
    <input type='text' placeholder='Item Location' />
    <input type='text' placeholder='Item Image' />
    <input type='text' placeholder='Item Price' />
    <button>submit</button>
  </div>
  </>)
  };


}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});


export default connect(mapReduxStateToProps)(InfoPage);
