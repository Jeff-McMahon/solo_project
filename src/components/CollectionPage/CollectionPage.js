import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CollectionPage.css';


class CollectionPage extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: "FETCH_ITEMS" });
  };

  editItem = (id) => {
    console.log('in Edit', id)
    this.props.dispatch({
      type: "EDIT_ITEM",
      payload: id,
    });
  }

  removeItem = (id) => {
    console.log('In Delete', id)
    this.props.dispatch({
      type: "LOOSE_ITEMS",
      payload: id
    });
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
                  <button id='details_button'>Details</button>
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
