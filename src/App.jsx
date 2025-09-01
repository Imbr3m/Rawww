import React from 'react'
import Hero from './compoments/Hero'
import About from './compoments/About'
import Navbar from './compoments/Navbar'
import Features from './compoments/Features'
import Story from './compoments/Story'
import Contact from './compoments/Contact'
import Footer from './compoments/Footer'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden '>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}

export default App