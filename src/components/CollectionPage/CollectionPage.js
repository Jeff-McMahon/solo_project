import React, { Component } from 'react';
import { connect } from 'react-redux';


class CollectionPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM


      componentDidMount = () => {
        this.props.dispatch({ type: "FETCH_ITEMS" });
      };

      removeItem = (ids) => {
        console.log('In Delete', ids)
        this.props.dispatch({
          type: "LOOSE_ITEMS",
          payload: ids,
        });
      };
    
      render() {
        console.log(this.props.id);
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
                    <button onClick={() => this.removeItem(item.id)}>Delete</button>
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
    


// this allows us to use <App /> in index.js
export default connect(mapReduxStateToProps)(CollectionPage);
