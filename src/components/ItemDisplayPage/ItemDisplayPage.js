
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
        <div><h1 id='item_detail_headline'>Item Detail Page</h1></div>

          {this.props.items.map((item) => {
            console.log('current item is', "item");
            return (
              <>
                <div class="container-fluid" id='thebox'>
                  <div class="row">
                    <div class="col-lg">
                      <img id='imageIDP' src={`/media/${item.item_image}`} />
                    </div>
                    <div class="col-lg">
                      <table id='itemTable'>
                        <th><td></td><td></td></th>
                        <tr><td id='heading'>Item Name:</td><td>{item.item_name}</td></tr>
                        <tr><td id='heading'>Model Number:</td><td>{item.item_model}</td></tr>
                        <tr><td id='heading'>Notable Details:</td><td>{item.item_detail}</td></tr>
                        <tr><td id='heading'>Location:</td><td>{item.item_location}</td></tr>
                        <tr><td id='heading'>Price: $</td><td>{item.item_price}</td></tr>
                      </table>
                    </div>
                    <div class="col-lg">
                      <button id='deletebutton' onClick={() => this.removeItem(item.id)}>Delete</button>
                      <button id='forSaleButton' onClick={() => this.editItem(item.id)}>Add To For Sale List</button>
                      <button id='wishListButton' onClick={() => this.editItem(item.id)}>Add To Wish List</button>
                    </div>
                  </div>
                  
                </div>
              </>
            )
          })}

      </div >
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  items: reduxState.item,
});

export default connect(mapReduxStateToProps)(ItemDisplayPage);
