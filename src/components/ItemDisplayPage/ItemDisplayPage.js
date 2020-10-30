
import React, { Component } from "react";
import { connect } from "react-redux";


class ItemDisplayPage extends Component {
  componentDidMount = () => {
    this.props.dispatch({ type: "FETCH_ITEMS" });
  };

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <ul>
          {this.props.items.map((item) => {
            console.log('current item is', item);
            return <div><img src={`/media/${item.item_image}`} />
            <li>{item.item_name}</li>
            <li>{item.item_model}</li>
            <li>{item.item_detail}</li>
            <li>{item.item_location}</li>
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
