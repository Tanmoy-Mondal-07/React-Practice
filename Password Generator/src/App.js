import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

export default function App() {

  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [char, setchar] = useState(false);
  const [password, setpassword] = useState("");

  //ref hook
  const passwordref = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if (number) str += "1234567890"
    if (char) str += "!@#$%^&*()?"
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)
  }, [length, number, char, setpassword])

  const copypass = useCallback(()=>{
    passwordref.current?.select();
    // passwordref.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password)
  },[password])

useEffect(()=>{passwordgenerator()},[length, char, number, passwordgenerator])

  return (
    <>
      <div className="login_form_container">
      <div className="login_form">
        <h2>Password generator</h2>
        <div className="input_group">
          <i className="fa fa-unlock-alt"></i>
          <input
           type="text" value={password} readOnly ref={passwordref} 
            placeholder="Password"
            className="input_text"
            autocomplete="off"
          />
          <div className="button_group" id="login_button">
        <a onClick={copypass}>Copy</a>
        </div>
        </div>
        <div className="butk" >
        <input className='from-range' type="range" min={6} max={20} value={length} onChange={(e) => { setlength(e.target.value) }} />
          <label>Length:{length}</label>
          </div>
        <div className="fotter">
        <input style={{marginLeft:'10px'}} type="checkbox" defaultChecked={number} id="numberinput" onChange={() => { setnumber((prev) => !prev) }} />
          <label>Numbers</label>
          <input style={{marginLeft:'100px'}} type="checkbox" defaultChecked={char} id="numberinput" onChange={() => { setchar((pre) => !pre) }} />
          <label>Charters</label>
        </div>
      </div>
    </div>
    </>
  )
}
