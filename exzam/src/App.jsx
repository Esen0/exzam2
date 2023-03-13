import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'
import Fond from './components/Fond/Fond'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Nav></Nav>
   <Routes>

<Route path='/main' element={<Main/>}/>
<Route path='/fond' element={<Fond/>}/>

   </Routes>
   
    </div>
  )
}

export default App
