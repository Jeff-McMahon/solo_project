import React, { Component } from 'react';
import { connect } from 'react-redux';


class wishList extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: "WISH_LIST_ITEMS" });
  };

  render() {
    return (
      <div className="container">
        <h1>Wish List</h1>
        <ul>
          {this.props.items.map((item) => {
            console.log('current item is', (item.id));
            return (
              <div>
                <li>
                  <img src={`/media/${item.item_image}`} />
                  <h3>{item.item_name}</h3>
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

export default connect(mapReduxStateToProps)(wishList);