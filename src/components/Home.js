import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Fotter'
function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  )
}

export default Home