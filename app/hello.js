//hello.js
import React, { Component } from 'react'
import config from './config.json';

class Hello extends Component {
    render() {
        return ( <div> { config.helloText } </div> ); 
    }
}

export default Hello