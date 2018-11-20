import React, { Component } from 'react';
import MyLights from './lights/lightsdata';



//const starter = this.state.lights

class Widgets extends Component {
  constructor(props){
    super(props);

    this.state = {
      lights: [],
      isLoading: false,
    };
  }

 
  render() {
    return (
      <MyLights />
    )
  }
}

export default Widgets;
