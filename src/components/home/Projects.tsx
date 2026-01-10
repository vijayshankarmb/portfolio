import React from 'react'
import Container from '../ui/Container'
import { SectionHeadler } from '../common/SectionHandler'
import ProjectCard from '../projects/ProjectCard'
import { projects } from '@/config/Projects'

const Projects = () => {
  return (
    <Container className="mt-20">
      <SectionHeadler subHeading="Featured" heading="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Container>
  )
}

export default Projects