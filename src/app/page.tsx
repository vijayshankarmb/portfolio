import React from 'react'
import Container from '@/components/ui/Container'
import Hero from '@/components/home/Hero'
import Projects from '@/components/home/Projects'
import About from '@/components/home/About'

const Home = () => {
  return (
    <Container className="min-h-screen py-16 space-y-12">
      <Hero />
      <Projects />
      <About />
    </Container>
  )
}

export default Home

