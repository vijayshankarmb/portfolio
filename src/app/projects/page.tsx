import React from 'react';
import Container from '@/components/ui/Container';
import { projects } from '@/config/Projects';
import ProjectCard from '@/components/projects/ProjectCard';
import { SectionHeadler } from '@/components/common/SectionHandler';

export const metadata = {
    title: 'Projects | Vijay',
    description: 'A collection of my projects and work.',
};

export default function ProjectsPage() {
    return (
        <Container className="min-h-screen py-16 space-y-12 md:border md:border-b-0">
            <div className="space-y-4">
                <SectionHeadler
                    subHeading="Portfolio"
                    heading="All Projects"
                />
                <p className="text-neutral-500 max-w-2xl">
                    Here are some of the projects I've worked on. Each one represents a different challenge and a unique solution.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </Container>
    );
}
