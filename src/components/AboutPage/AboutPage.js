
import React, { Component } from "react";
import { connect } from "react-redux";


class AboutPage extends Component {
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
            return <li>{JSON.stringify(item)}<img src={`/media/${item.item_image}`}/></li>
          })}
        </ul>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  items: reduxState.item,
});

export default connect(mapReduxStateToProps)(AboutPage);
