// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './comp/About';
import Alert from './comp/Alert';
import Navbar from './comp/Navbar';
import Textf from './comp/Textf';
import {
  BrowserRouter as Main,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('navbar navbar-expand-lg navbar-light bg-light');
  const [modee, setmodee] = useState('on dark mode');
  const [mad, setmad] = useState('form-check form-switch text-dark')
  const [alert, setalert] = useState (null)

  const salert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(()=>(
setalert(null)
    ), 4000);
  }

 const togglemode = ()=>{
  if(mode === 'navbar navbar-expand-lg navbar-dark bg-dark'){
    setMode('navbar navbar-expand-lg navbar-light bg-light');
    setmodee("on dark mode");
    setmad('form-check form-switch text-dark')
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    salert(" light mode on", "success")
  }
  else{
    setMode('navbar navbar-expand-lg navbar-dark bg-dark');
    setmodee("on light mode");
    setmad('form-check form-switch text-light')
    document.body.style.backgroundColor = 'rgb(47, 47, 48)';
    document.body.style.color = 'white';
    salert(" dark mode on", "success")
  }
 }
  return (
    <>
    <Main>
    <Navbar title="textutils" modee={mode} togglemode={togglemode} mod={modee} mad={mad}/>
    <div className="container my-3">
  <Routes>
    <Route exect path='/' element = {<Textf salert={salert} heading="enter the text here"/>}/>
    <Route exect path='/About' element = {<About modee={mode}/>}/>
  </Routes>
    </div>
    </Main>
    <Alert alert = {alert}  />
    </>
  );
}

export default App;
