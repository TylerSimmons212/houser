import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'',
      address:'',
      city:'',
      state:'',
      zipcode: '',
      image:'',
      monthlyMortgage:'',
      amount:'',
      desiredRent:''
    }
  }

  addHouse(){
    const houseInput = {
    name:this.state.name,
    address:this.state.address,
    city:this.state.city,
    state:this.state.state,
    zipcode:this.state.zipcode,
    image:this.state.image,
    monthlyMortgage:this.state.monthlyMortgage,
    amount:this.state.amount,
    desiredRent:this.state.desiredRent

    }
    axios.post(`api/houses`,houseInput)
    .then(<Link to='/'/>)
  }

  changeHandler(key, e) {
    this.setState({ [key]: e.target.value })
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">

        <input value={this.state.name} onChange={e => this.changeHandler('name', e)} type='text' placeholder='Name'></input>
        <br/>
        <input value={this.state.address} onChange={e => this.changeHandler('address',e)} type='text' placeholder='Address'></input>
        <br/>
        <input value={this.state.city} onChange={e => this.changeHandler('city', e)} type='text' placeholder='City'></input>
        <br/>
        <input value={this.state.state} onChange={e => this.changeHandler('state', e)} type='text' placeholder='State'></input>
        <br/>
        <input value={this.state.zipcode} onChange={e => this.changeHandler('zipcode', e)} type='text' placeholder='Zipcode'></input>
        <br/>
        <input value={this.state.image} onChange={e => this.changeHandler('image', e)} type='text' placeholder='ImageURL'></input>
        <br/>
        <input value={this.state.monthlyMortgage} onChange={e => this.changeHandler('monthlyMortgage', e)} type='text' placeholder='Monthly Mortgage'></input>
        <br/>
        <input value={this.state.amount} onChange={e => this.changeHandler('amount', e)} type='text' placeholder='Amount'></input>
        <br/>
        <input value={this.state.desiredRent} onChange={e => this.changeHandler('desiredRent', e)} type='text' placeholder='Desired Rent'></input>
        <br/>
        <Link to='/'>
            <button> Cancel </button>
        </Link>
        <Link to='/'>
            <button onClick={() => this.addHouse()}>
              Complete
            </button>
        </Link>


      </div>
    ); 
  }
}

export default Wizard;
