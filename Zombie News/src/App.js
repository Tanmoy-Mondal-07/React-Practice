import { useState } from 'react';
import './App.css';

import React from 'react'
import Navbar from './comp/Navbar';
import News from './comp/News';
import {
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [country, setcountry] = useState ('in');

  const us=()=>{
    setcountry('us')
console.log(country)
  }

  return (
    <>
      <Navbar us={us} />
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <Routes>
        <Route exect path='/' element={<News  category='general'  setProgress={setProgress} apiKey={apiKey} pageSize={6} country={country}/>} />
        <Route exect path='/business' element={<News  category='business'  setProgress={setProgress} apiKey={apiKey} pageSize={6} country={country}/>} />
        <Route exect path='/entertainment' element={<News  category='entertainment'  setProgress={setProgress} apiKey={apiKey} pageSize={6} country={country}/>} />
        <Route exect path='/health' element={<News  category='health'  setProgress={setProgress} apiKey={apiKey} pageSize={6} country={country}/>} />
        <Route exect path='/science' element={<News  category='science'  setProgress={setProgress} apiKey={apiKey} pageSize={6} country={country}/>} />
        <Route exect path='/sports' element={<News  category='sports'  setProgress={setProgress} apiKey={apiKey} pageSize={6} country={country}/>} />
        <Route exect path='/technology' element={<News  category='technology'  setProgress={setProgress} apiKey={apiKey} pageSize={6} country={country}/>} />
      </Routes>
    </>
  )
}

export default App;