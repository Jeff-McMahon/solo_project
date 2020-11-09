import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {
  state = {
    heading: 'Class Component',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <>
      <div id='landingpage' className="container">
        <h2 id='headline'>Welcome to The Collector!</h2>
      </div>

        <div className="grid">
          <div className="grid-col grid-col_8" id='textarea'>
            <p>
              Any collector will tell you that searching for new items for your collection
              is the fun part of collecting. Organizing your collection, archiving the item's
              location and remembering where you put it is a little more... well... boring.
              
            </p>

            <p>
              Enter 'The Collector'! Designed to let you spend more time collecting and less
              time with the mundane tasks of organizing and cataloging your collection. '
              The Collector' is your on-line answer to the question of "Where did I put that?".
              Plus, with the added functionality of the 'For Sale' and 'Wish List', you can 
              advertise what you'd like to sell or wish to buy online!
            </p>

            <p>
              Your collection is only visible to you, locked behind a password protected
              firewall. The location of all your items will never be shared with anyone. 
              Please, take a moment to register an account and enjoy 'The Collector'!
            </p>
          </div>
          <div className="grid-col grid-col_4">
            <RegisterForm />

            <center>
              <h4 id='memberheadline'>Already a Member?</h4>
              <button id='loginbutton' className="btn btn_sizeSm" onClick={this.onLogin}>
                Login
              </button>
            </center>
          </div>
        </div>
        </>
      );
  }
}

export default connect(mapStoreToProps)(LandingPage);
