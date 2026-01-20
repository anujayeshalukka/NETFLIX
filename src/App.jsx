import { useState } from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import Cards from './components/Cards'
import Faq from './components/Faq'
import Footeremail from './components/Footeremail'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Slider/>
   <Cards/>
   <Faq/>
   <Footeremail/>
   <Footer/>
    </>
  )
}

export default App
