import React, { Component } from 'react';
import { connect } from 'react-redux';


class forSalePage extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: "FOR_SALE_ITEMS" });
  };

  render() {
    return (
      <div className="container">
        <h1>For Sale Page</h1>
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

export default connect(mapReduxStateToProps)(forSalePage);
