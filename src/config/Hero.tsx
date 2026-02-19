
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

export const skillComponents = {
    TypeScript: TypeScript,
    ReactIcon: ReactIcon,
    NextJs: NextJs,
    Bun: Bun,
    PostgreSQL: PostgreSQL,
    NodeJs: NodeJs,
    MongoDB: MongoDB,
    Prisma: Prisma,
    JavaScript: JavaScript,
};

export const heroConfig = {
    name: 'Vijay',
    title: 'Building scalable web applications with clean architecture and performance in mind.',
    avatar: '/assets/logo2.jpg',

    skills: [
        {
            name: 'Typescript',
            href: 'https://www.typescriptlang.org/',
            component: 'TypeScript',
        },
        {
            name: 'React',
            href: 'https://react.dev/',
            component: 'ReactIcon',
        },
        {
            name: 'Next.js',
            href: 'https://nextjs.org/',
            component: 'NextJs',
        },
        {
            name: 'Bun',
            href: 'https://bun.sh/',
            component: 'Bun',
        },
        {
            name: 'PostgreSQL',
            href: 'https://www.postgresql.org/',
            component: 'PostgreSQL',
        },
    ],

    description: {
        template:
            'I build modern full-stack web applications using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. I enjoy crafting clean <b>UI</b> and designing <b>scalable</b> backend systems. I am passionate about learning new technologies and continuously improving my skills.',
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
