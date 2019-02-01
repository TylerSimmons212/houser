import React, { Component } from 'react';
import House from '../House/House'
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses : []
        }
    }

    displayHouses(){
    axios.get('/api/houses')
    .then(res => {
        this.setState({
            houses:res.data
        })
        console.log(this.state)
    })}
    removeHouse( id ) {
        axios.delete( `/api/fortune/${id}` )
        .then( response => {
          this.setState({ houses: response.data });
        });
      }

  render() {
    let houses = this.state.houses.map(house => {
        return <House houses={house} delete={this.removeHouse}/>
      })
    
    return (
      <div className="App">
        Dashboard
        <Link to='/wizard'>
            <button>Add New Property</button>
        </Link>
        <button onClick={() => this.displayHouses()}>View Houses</button>
        {houses}
      </div>
    ); 
  }
}

export default Dashboard;