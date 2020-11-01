import React, { Component } from 'react';
import { connect } from 'react-redux';


class InfoPage extends Component {

  state = {
    item_name: '',
    item_model: '',
    item_detail: '',
    item_location: '',
    item_image: '',
    item_price: ''
  }



  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log('in handleChange');
  }


  handleSubmit = (event) => {
    console.log('form submitted')
    this.props.dispatch({
      type:"ADD_ITEM", 
      payload: this.state
    })
    this.setState({
      item_name: '',
      item_model: '',
      item_detail: '',
      item_location: '',
      item_image: '',
      item_price: ''
    });
    console.log('set state')
  }

  render() {
    return (
      <>
        <div>
          <p>New item page! Please enter in a new item to your collection.</p>
        </div>
        <div><form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.newItem.item_name} onChange={this.handleChange} placeholder='Item Name' />
          <input type='text' value={this.state.newItem.item_model} onChange={this.handleChange} placeholder='Item Model' />
          <input type='text' value={this.state.newItem.item_detail} onChange={this.handleChange} placeholder='Item Detail' />
          <input type='text' value={this.state.newItem.item_location} onChange={this.handleChange} placeholder='Item Location' />
          <input type='text' value={this.state.newItem.item_image} onChange={this.handleChange} placeholder='Item Image' />
          <input type='text' value={this.state.newItem.item_price} onChange={this.handleChange} placeholder='Item Price' />
          <button type="submit">Submit Item</button>
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



export default connect()(InfoPage);
