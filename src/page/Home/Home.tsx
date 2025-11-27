import Hero from '@components/template/home/Hero/Hero'
import Projects from '@components/template/home/Projects/Projects'
import Skills from '@components/template/home/Skills/Skills'
import React from 'react'

const Home:React.FC = ()=>{
  return (
    <>
    <Hero/>
    <Projects/>
    <Skills/>
    </>
  )
}

export default Home