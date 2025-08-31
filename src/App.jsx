import React from 'react'
import Hero from './compoments/Hero'
import About from './compoments/About'
import Navbar from './compoments/Navbar'
import Features from './compoments/Features'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden '>
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  )
}

export default App