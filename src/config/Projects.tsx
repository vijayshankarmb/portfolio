import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import NextJs from '@/components/technologies/NextJs';
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
        link: 'https://project-management-system.vijayx.in/',
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
        live: 'https://project-management-system.vijayx.in/',
        details: false,
        projectDetailsPageSlug: '',
        isWorking: true,
    },
    {
        title: 'CompoLab – Next.js SaaS Platform with Advanced Motion UI',
        description: 'CompoLab is a high-performance web application designed to demonstrate the pinnacle of modern frontend engineering. Built on the bleeding edge with Next.js 16 and React 19, it features a sophisticated dark-mode aesthetic that utilizes glassmorphism and subtle gradients to create a premium user experience.',
        image: '/assets/compolab.png',
        link: 'http://compo-lab.vijayx.in/',
        technologies: [
            { name: 'React 19', icon: <ReactIcon key="react" /> },
            { name: 'Next.js', icon: <NextJs key="nextjs" /> },
            { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
            { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
            { name: 'Vercel', icon: <Vercel key="vercel" /> },
            { name: 'Shadcn/UI', icon: <Shadcn key="shadcn" /> },
        ],
        github: 'https://github.com/vijayshankarmb/compo-lab.git',
        live: 'http://compo-lab.vijayx.in/',
        details: false,
        projectDetailsPageSlug: '',
        isWorking: true,
    },
    {
        title: 'Reelo – Next.js 16 Video Sharing Platform',
        description: 'Reelo is a high-performance video sharing application designed to demonstrate the power of modern media streaming and frontend engineering. Built on the bleeding edge with Next.js 16 and React 19, it features a sleek dark-mode aesthetic, secure authentication with Next-Auth, and seamless video management powered by ImageKit and MongoDB.',
        image: '/assets/reelo.png',
        link: 'http://reelo.vijayx.in/',
        technologies: [
            { name: 'React 19', icon: <ReactIcon key="react" /> },
            { name: 'Next.js 16', icon: <NextJs key="nextjs" /> },
            { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
            { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
            { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
        ],
        github: 'https://github.com/vijayshankarmb/reelo.git',
        live: 'http://reelo.vijayx.in/',
        details: false,
        projectDetailsPageSlug: '',
        isWorking: true,
    }
];
