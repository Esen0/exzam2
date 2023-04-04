import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Nav from './components/Nav/Nav'
import Main from './components/Main/Main'
import Fond from './components/Fond/Fond'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import Team from './components/Team/Team'
import Faq from './components/FAQ/Faq'
import Dino from './components/Dino/Dino'
import Pino from './components/Pino/Pino'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
    <Nav></Nav>
   <Routes>

<Route path='/' element={<Main/>}/>
<Route path='/fond' element={<Fond/>}/>
<Route path='/card' element={<Card/>}/>

<Route path='/team' element={<Team/>}/>  
<Route path='/404' element={<Faq/>}/>   
<Route path='/dino' element={<Dino/>}/>
<Route path='/pino' element={<Pino/>}/>


   </Routes>
 <Footer></Footer>

    </div>
  )
}

export default App
