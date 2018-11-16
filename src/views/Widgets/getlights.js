import React, { Component } from 'react';
import { CardGroup, Col, Row } from 'reactstrap';
import Widget01 from './Widget01';
import Widget02 from './Widget02';
import Widget03 from './Widget03';
import Widget04 from './Widget04';
import { Line } from 'react-chartjs-2';

class GetLights extends Component {
    getLights = (props) => {
        var url = 'https://wap.tplinkcloud.com?token=f61405d4-A5vzfIpMXZjdWlI4YMAunEI';
        var data = {"method":"getDeviceList", "params": {"requestData": "{\"system\":{\"get_sysinfo\":null},\"emeter\":{\"get_realtime\":null}}" }};
      
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(response => props.setState({lights:response.result.deviceList}))
        .catch(error => console.error('Error:', error));
          }
    render() {
        return (<p></p>)
        }
    }

export default GetLights;


