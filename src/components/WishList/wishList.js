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
        <h1 id='wl_headline'>Wish List</h1>
          {this.props.items.map((item) => {
            console.log('current item is', (item.id));
            return (
              
                <div id='wl_image_column'>
                  <img id='wl_image' src={`/media/${item.item_image}`} />
                  <table id='wl_table'>
                    <tr>
                      <th id='wl_table_name'>Item Name:</th><td id='wl_lineitem' >{item.item_name}</td>
                    </tr>
                    <tr>
                      <th id='wl_table_name'>Notable Details: </th><td id='wl_lineitem'>{item.item_detail}</td>
                    </tr>
                    <tr>
                      <th id='wl_table_name'>Please Contact:</th><td id='wl_lineitem'>{item.item_owner}</td>
                    </tr>
                  </table>
                </div>
              
            );
          })}
      </>
    )
  }
}


const mapReduxStateToProps = (reduxState) => ({
  items: reduxState.item,
});

export default connect(mapReduxStateToProps)(wishList);