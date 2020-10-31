import React, { Component } from 'react';
import { connect } from 'react-redux';


class InfoPage extends Component {

  state = {
    newItem: {
      item_name: '',
      item_model: '',
      item_detail: '',
      item_location: '',
      item_image: '',
      item_price: '',
    },
    localItem: [],
  };

  handleChange = (event, propName) => {
    this.setState({ 
      newItem: {
        ...this.state.newItem,
        [propName]: event.target.value,
      }
    });
    console.log('in handleChange');
  }


  handleSubmit = (event) => {
    console.log('form submitted');
    this.setState({
      localItem: [...this.state.localItem, this.state.newItem],
    })
    console.log('set state')
    this.addItem();
  }

  addItem = (item) => {
    console.log('In addItems', item)
    this.props.dispatch({
      type: "ADD_ITEMS",
      payload: item,
    });
  };


  render() {
    return (
      <>
        <div>
          <p>New item page! Please enter in a new item to your collection.</p>
        </div>
        <div><form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.newItem.item_name} onChange={(event) => this.handleChange(event, 'item_name')} placeholder='Item Name' />
          <input type='text' value={this.state.newItem.item_model} onChange={(event) => this.handleChange(event, 'item_model')} placeholder='Item Model' />
          <input type='text' value={this.state.newItem.item_detail} onChange={(event) => this.handleChange(event, 'item_detail')} placeholder='Item Detail' />
          <input type='text' value={this.state.newItem.item_location} onChange={(event) => this.handleChange(event, 'item_location')} placeholder='Item Location' />
          <input type='text' value={this.state.newItem.item_image} onChange={(event) => this.handleChange(event, 'item_image')} placeholder='Item Image' />
          <input type='text' value={this.state.newItem.item_price} onChange={(event) => this.handleChange(event, 'item_price')} placeholder='Item Price' />
          <input type="submit" value="Add Item" />
        </form>
        </div>
        <div>
          <ul>
            {this.state.localItem.map(item => <li>adding {item.item_name} to collection</li>)}
          </ul>
        </div>
      </>)
  };


}

const mapReduxStateToProps = (reduxState) => ({
  items: reduxState,
});


export default connect(mapReduxStateToProps)(InfoPage);
