import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { Themeprovider } from './context/Theme'

function App() {
  const [thememode, setthememode] = useState("light")

  const lighttheme=()=>{
    setthememode("light")
    console.log("hlo i am under the water :)")
  }
  const darktheme=()=>{
    setthememode("dark")
    console.log("working")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(thememode)
  },[thememode])

  return (
    <Themeprovider value={{thememode,lighttheme,darktheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>

          </div>

          <div className="w-full max-w-sm mx-auto">
          <Card/>
          </div>
        </div>
      </div>
    </Themeprovider>
  )
}

export default App
