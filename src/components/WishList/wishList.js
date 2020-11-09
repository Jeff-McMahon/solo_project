import React, { Component } from 'react';
import { connect } from 'react-redux';
import './wishList.css';



class wishList extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: "WISH_LIST_ITEMS" });
  };

  render() {
    return (
      <>
        <div id='wl_page_header'>
          <h1 id='wl_headline'>Wish List</h1>
        </div>
        <div>
          <ul id='wl_ul'>
            {this.props.items.map((item) => {
              console.log('current item is', (item.id));
              return (
                <div id='wl_image_column'>
                  <li id='wl_item'>
                    <div>
                    <img id='wl_image' src={`/media/${item.item_image}`} />
                    <h3 id='wl_lineitem'>{item.item_name}</h3>
                    <h3>{item.item_detail}</h3>
                    </div>
                  </li>
                </div>)})}
          </ul>
        </div>
      </>)
  }
}

const mapReduxStateToProps = (reduxState) => ({
  items: reduxState.item,
});

export default connect(mapReduxStateToProps)(wishList);