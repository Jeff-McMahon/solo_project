import React, { Component } from 'react';
import { connect } from 'react-redux';
import './forSale.css';



class forSalePage extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: "FOR_SALE_ITEMS" });
  };

  render() {
    return (
      <div id='page_header' className="container">
        <h1 id='headline'>For Sale Page</h1>
          {this.props.items.map((item) => {
            console.log('current item is', (item.id));
            return (
              <div id='fs_image_column'>
                  <img id='fs_image' src={`/media/${item.item_image}`} />
                  <h3>{item.item_name}</h3>
              </div>)
          })}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  items: reduxState.item,
});

export default connect(mapReduxStateToProps)(forSalePage);
