
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
    let forSale = 'No';
    let wishList = 'No';
    return (
      <div className="container">
        <div><h1>Item Detail Page</h1></div>
        <ul>
          {this.props.items.map((item) => {
            if (item.list_forsale === true) {
              forSale = 'Yes'
            }
            if (item.list_wish === true) {
              wishList = 'Yes'
            }
            console.log('current item is', "item");
            return (
              <>
                  <div id='thebox'>
                    <div id='individualitem'>
                      <img id='image' src={`/media/${item.item_image}`} />
                    </div>
                    <div id='itemdetails'>
                      <li>Item Name:  {item.item_name}</li>
                      <li>Model Number:  {item.item_model}</li>
                      <li>Notable Details:  {item.item_detail}</li>
                      <li>Location:   {item.item_location}</li>
                      <li>Price: ${item.item_price}</li>
                      <li><button id='deletebutton' onClick={() => this.removeItem(item.id)}>Delete</button></li>
                      <li><button id='forSaleButton' onClick={() => this.editItem(item.id)}>Add To For Sale List</button></li>
                      <li><button id='wishListButton' onClick={() => this.editItem(item.id)}>Add To Wish List</button></li>
                    </div>
                  </div>
            </>
            )})}
        </ul>
      </div >
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  items: reduxState.item,
});

export default connect(mapReduxStateToProps)(ItemDisplayPage);
