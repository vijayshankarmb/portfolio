
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import Python from '@/components/technologies/Python';
import FastAPI from '@/components/technologies/Fastapi';
import LangChain from '@/components/technologies/Langchain';
import LangGraph from '@/components/technologies/Langgraph';

export const skillComponents = {
    Python: Python,
    FastAPI: FastAPI,
    LangChain: LangChain,
    LangGraph: LangGraph,
    PostgreSQL: PostgreSQL,
    NodeJs: NodeJs,
    MongoDB: MongoDB,
    Prisma: Prisma,
    JavaScript: JavaScript,
};

export const heroConfig = {
    name: 'Vijay',
    title: 'AI & Backend Engineer building production-ready GenAI applications, agentic workflows, and scalable APIs.',
    avatar: '/assets/logo2.jpg',

    skills: [
        {
            name: 'Python',
            href: 'https://www.python.org/',
            component: 'Python',
        },
        {
            name: 'FastAPI',
            href: 'https://fastapi.tiangolo.com/',
            component: 'FastAPI',
        },
        {
            name: 'LangChain',
            href: 'https://www.langchain.com/',
            component: 'LangChain',
        },
        {
            name: 'LangGraph',
            href: 'https://www.langchain.com/langgraph',
            component: 'LangGraph',
        },
        {
            name: 'PostgreSQL',
            href: 'https://www.postgresql.org/',
            component: 'PostgreSQL',
        },
    ],

    description: {
        template:
            'I specialize in building GenAI applications, AI agents, and backend infrastructure using {skills:0}, {skills:1}, {skills:2}, {skills:3}, and {skills:4}. Focused on scalable APIs, RAG architectures, and real-world AI systems.'
    },

    buttons: [
        {
            variant: 'outline',
            text: 'Resume / CV',
            href: '/assets/resume.pdf',
            icon: 'CV',
        },
    ],
};

export const socialLinks = [
    {
        name: 'X',
        href: 'https://x.com/vijayXcodes',
        icon: <X />,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/vijay-shankar-a63650363/',
        icon: <LinkedIn />,
    },
    {
        name: 'Github',
        href: 'https://github.com/vijayshankarmb',
        icon: <Github />,
    },
    {
        name: 'Email',
        href: 'mailto:vijayshankarmb@gmail.com',
        icon: <Mail />,
    },
];
