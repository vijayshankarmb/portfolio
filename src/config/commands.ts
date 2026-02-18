
export type commandHandler = () => string | string[];

export const commands: Record<string, commandHandler> = {
    help: () => [
        "Available commands",
        "help - Display this help message",
        "about - Who am I",
        "skills - View technical skills",
        "contact - Get in touch",
        "clear - Clear terminal", 
    ],
    about: () => 
        "I am Vijay, a full stack developer building modren web experiences.",
    skills: () =>
        "React, Next.js, TypeScript, PostgreSQL, Tailwind CSS",
    contact: () =>
        "vijayx.in | x.com/vijayXcodes | github.com/vijayshankarmb",
};

