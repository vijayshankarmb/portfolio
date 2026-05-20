import ExpressJs from '@/components/technologies/ExpressJs';
import MongoDB from '@/components/technologies/MongoDB';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import NextJs from '@/components/technologies/NextJs';
import Shadcn from '@/components/technologies/Shadcn';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import Fastapi from '@/components/technologies/Fastapi';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Python from '@/components/technologies/Python';
import LangChain from '@/components/technologies/Langchain';
import { Project } from '@/types/project';

export const projects: Project[] = [
    {
        title: 'AI-Powered Resume Analyzer & Optimizer',
        description:
            'A full-stack AI-driven resume analysis platform built with Next.js, React 19, and Express.js that parses PDF resumes, scores them on ATS compatibility, structure, and readability, and leverages Google Gemini 2.5 Flash to deliver actionable improvement suggestions and resume-to-job-description comparison with match scoring.',
        image: '/assets/resumeiq.png',
        link: 'https://resumeiq.vijayx.in/',
        technologies: [
            { name: 'Next.js', icon: <NextJs key="nextjs" /> },
            { name: 'React 19', icon: <ReactIcon key="react" /> },
            { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
            { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
            { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
            { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
            { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
            { name: 'Vercel', icon: <Vercel key="vercel" /> },
        ],
        github: 'https://github.com/vijayshankarmb/resumeiq-fe.git',
        live: 'https://resumeiq.vijayx.in/',
        details: false,
        projectDetailsPageSlug: '',
        isWorking: true,
    },
    {
        title: 'AI-Research-Assistant',
        description:
            'A production-grade AI research assistant built with Python, FastAPI, PostgreSQL and Next.js. It features real-time streaming AI chat, persistent conversation memory, and a sophisticated RAG pipeline for multi-PDF document analysis using LangChain, ChromaDB, and Google Gemini 1.5 Flash.',
        image: '/assets/ai-research-assistant.png', 
        link: 'https://ai-research-assistant.vijayx.in/',
        technologies: [
            { name: 'Python', icon: <Python key="python" /> }, 
            { name: 'FastAPI', icon: <Fastapi key="fastapi" /> },
            { name: 'LangChain', icon: <LangChain key="langchain" /> },
            { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> }, 
            { name: 'Next.js', icon: <NextJs key="nextjs" /> },
            { name: 'React', icon: <ReactIcon key="react" /> },
            { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
            { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
        ],
        github: 'https://github.com/vijayshankarmb/ai-research-assistant',
        live: 'https://ai-research-assistant.vijayx.in/',
        details: false,
        projectDetailsPageSlug: '',
        isWorking: true,
    }
];
