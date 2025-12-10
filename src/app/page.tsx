import React from 'react'
import Container from '@/components/ui/Container'
import Hero from '@/components/home/Hero'
import Experience from '@/components/home/Experience'
import Projects from '@/components/home/Projects'

const Home = () => {
  return (
    <Container className="min-h-screen py-16 space-y-12">
      <Hero />
      <Experience />
      <Projects />
    </Container>
  )
}

export default Home

