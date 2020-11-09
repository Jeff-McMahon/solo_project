import React, { Component } from 'react';
import { connect } from 'react-redux';
import './forSale.css';



class forSalePage extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: "FOR_SALE_ITEMS" });
  };

  render() {
    return (
      <>
      <h1 id='headline'>For Sale Page</h1>
      <div>

        {this.props.items.map((item) => {
          console.log('current item is', (item.id));
          return (
            <>
              <div id="fs_image_column">
                <img id='fs_image' src={`/media/${item.item_image}`} />
              
                <table id='fs_table'>
                  <tr>
                    <th id='fs_table_name'>Item Name:</th><td id='fs_lineitem' >   {item.item_name}</td>
                  </tr>
                  <tr>
                    <th id='fs_table_name'>Item Price:</th><td id='fs_lineitem'>   {item.item_price}</td>
                  </tr>
                  <tr>
                    <th id='fs_table_name'>Please Contact:</th><td id='fs_lineitem'>   {item.item_owner}</td>
                  </tr>
                </table>
                </div>
              
            </>
          );
        }
        )
        }
      </div>
      </>
    )
  }


}



const mapReduxStateToProps = (reduxState) => ({
  items: reduxState.item,
});

export default connect(mapReduxStateToProps)(forSalePage);
