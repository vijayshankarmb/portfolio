import React from 'react'
import Container from '@/components/ui/Container'
import Hero from '@/components/home/Hero'
import Projects from '@/components/home/Projects'
import About from '@/components/home/About'
import Github from '@/components/home/Github'
import Footer from '@/components/common/Footer'
import { Divider } from '@/components/ui/divider'

const Home = () => {
  return (
    <Container
      className="min-h-screen py-16 space-y-12 md:border md:border-b-0 [--line-color:#71717a] dark:[--line-color:#e4e4e7]"
      style={{
        borderImage: "repeating-linear-gradient(-45deg, var(--line-color) 0 1px, transparent 1px 10px) 1",
        opacity: 1,
      }}
    >
      <Hero />
      <Divider />
      <Projects />
      <Divider />
      <About />
      <Divider />
      <Github />
      <Divider />
      <Footer />
    </Container>
  )
}

export default Home

