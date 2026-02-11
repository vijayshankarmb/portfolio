import React from 'react'
import Container from '@/components/ui/Container'
import Hero from '@/components/home/Hero'
import Projects from '@/components/home/Projects'
import About from '@/components/home/About'
import Github from '@/components/home/Github'
import Footer from '@/components/common/Footer'

const Home = () => {
  return (
    <Container className="min-h-screen py-16 space-y-12 md:border md:border-b-0">
      <Hero />
      <Projects />
      <About />
      <Github />
      <Footer />
    </Container>
  )
}

export default Home

