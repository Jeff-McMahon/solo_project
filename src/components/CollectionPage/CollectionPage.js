import React, { Component } from 'react';
import { connect } from 'react-redux';


class CollectionPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM


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
                <button>Details</button>
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
    


// this allows us to use <App /> in index.js
export default connect(mapReduxStateToProps)(CollectionPage);
