import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import {Robots} from './Robots';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      Robots: Robots,
      searchfield: ''
    }
  }

  whenchange=(event)=>{
      this.setState({searchfield: event.target.value})
  }
  render() {
    const filterrobo=this.state.Robots.filter(Robots=>{
      return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
          <h1 className='i f2 washed-green'>JUNGLE BOOK</h1>
          <SearchBox searchChange={this.whenchange}/>
          <Cardlist Robots={filterrobo}/>
      </div>
    );
  }
}

export default App;
