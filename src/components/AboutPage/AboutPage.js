import React, { Component } from "react";
import { connect } from 'react-redux'; 

class AboutPage extends Component {
  componentDidMount = () => {
    this.props.dispatch({ type: "FETCH_ITEMS" });
  }

  render() {
    console.log(this.props)
    return (
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
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AboutPage);
