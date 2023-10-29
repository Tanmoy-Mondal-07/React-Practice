// import { useState } from 'react';
import './App.css';

import React, { Component } from 'react'
import Navbar from './comp/Navbar';
import News from './comp/News';
export default class App extends Component {



  render() {
    return (
      <>
      <Navbar/>
      <News/>
      </>
    )
  }
}
