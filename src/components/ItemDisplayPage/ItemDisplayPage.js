
import React, { Component } from "react";
import { connect } from "react-redux";
import './ItemDisplay.css'


class ItemDisplayPage extends Component {
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
    console.log(this.props);
    return (
      <div className="container">
        <ul>
          {this.props.items.map((item) => {
            console.log('current item is', item);
            return <div id="image_column"><img id='image' src={`/media/${item.item_image}`} />
            <li>Item Name:  {item.item_name}</li>
            <li>Model Number:  {item.item_model}</li>
            <li>Notable Details:  {item.item_detail}</li>
            <li>Location:   {item.item_location}</li>
            <button onClick={() => this.removeItem(item.id)}>Delete</button>
            <button onClick={() => this.editItem(item.id)}>Add To For Sale List</button>
            <button onClick={() => this.editItem(item.id)}>Add To Wish List</button>
            </div>
          })}
        </ul>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  items: reduxState.item,
});

export default connect(mapReduxStateToProps)(ItemDisplayPage);
