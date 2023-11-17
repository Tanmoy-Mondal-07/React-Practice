import React from 'react';
import Navbar from './comp/Navbar';
import { useState } from 'react';

export default function App() {

const [clr, setclr] = useState ({ height:'100vmax',width:'100vmax', backgroundColor:'red'});

const white=()=>{
  setclr({ height:'100vmax',width:'100vmax', backgroundColor:'white'})
}
const black=()=>{
  setclr({ height:'100vmax',width:'100vmax', backgroundColor:'black'})
  console.log('working')
}

  return (
    <div style={clr}>
      <Navbar white={white} black={black}/>
    </div>
  )
}
