import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CollectionPage.css';



class CollectionPage extends Component {

  // Upon loading, a get request selects all the items from the user's collection.

  componentDidMount = () => {
    this.props.dispatch({ type: "FETCH_ITEMS" });
  };

  render() {
    return (
      <div>
        <div id='page_header'>
        <h1 id='headline'>Your Collection Page</h1>
        </div>
        <ul>
          {this.props.items.map((item) => {
            console.log('current item is', (item.id));
            return (
                <div id='image_column'>
                  <img id='image' src={`/media/${item.item_image}`} />
                  <h3>{item.item_name}</h3>
                </div>
          )})}
        </ul>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  items: reduxState.item,
});

export default connect(mapReduxStateToProps)(CollectionPage);
