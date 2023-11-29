import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

const [username,setusername]=useState('')
const [password,setpassword]=useState('')

const {setuser} = useContext(UserContext)

    const handlesubmit=(e)=>{
e.preventDefault()
setuser({username,password})
    }
  return (
    <div>
      <div>
        <h2>login</h2>
        <input type='text' value={username} onChange={(e)=>setusername(e.target.value)} placeholder='username'/><br/>
        <input type='text' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='password'/><br/>
        <button onClick={handlesubmit}>submit</button>

      </div>
    </div>
  )
}

export default Login
