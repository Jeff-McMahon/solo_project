import React, { Component } from 'react';
import { connect } from 'react-redux';


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
      <div className="container">
        <h1>Item Collection Page</h1>
        <ul>
          {this.props.items.map((item) => {
            console.log('current item is', (item.id));
            return (
              <div>
                <li>
                  <img src={`/media/${item.item_image}`} />
                  <h3>{item.item_name}</h3>
                  <button onClick={() => this.removeItem(item.id)}>Delete</button>
                  <button onClick={() => this.editItem(item.id)}>Add To For Sale List</button>
                  <button onClick={() => this.editItem(item.id)}>Add To Wish List</button>
                </li>
              </div>)
          })}
        </ul>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  items: reduxState.item,
});

export default connect(mapReduxStateToProps)(CollectionPage);
