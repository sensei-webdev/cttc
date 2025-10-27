import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-[#111427] min-h-screen text-white'>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
