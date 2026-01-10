import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import Shadcn from '@/components/technologies/Shadcn';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
    {
        title: 'Modern Full-Stack Project Management System',
        description:
            'A robust and scalable project management application built using the MERN stack (MongoDB, Express, React, Node.js) with strict TypeScript integration. The system features a secure, maintainable backend and a responsive, modern frontend designed for efficient task tracking, user management, and collaboration.',
        image: '/assets/pmss.png',
        link: 'https://project-management-system-one-zeta.vercel.app/',
        technologies: [
            { name: 'React 19', icon: <ReactIcon key="react" /> },
            { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
            { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
            { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
            { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
            { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
            { name: 'Vercel', icon: <Vercel key="vercel" /> },
            { name: 'Shadcn/UI', icon: <Shadcn key="shadcn" /> },
        ],
        github: 'https://github.com/vijayshankarmb/PMS-frontend.git',
        live: 'https://project-management-system-one-zeta.vercel.app/',
        details: false,
        projectDetailsPageSlug: '',
        isWorking: true,
    }
];
