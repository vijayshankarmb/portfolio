
export type CommandType = "normal" | "error" | "mode";

export type CommandResult = {
    output: string | string[];
    type: CommandType;
}

export type commandHandler = () => CommandResult;

export const commands: Record<string, commandHandler> = {
    help: () => ({
        type: "normal",
        output: [
            "Available commands",
            "help - Display this help message",
            "about - Who am I",
            "skills - View technical skills",
            "contact - Get in touch",
            "krishna - Enter Vishwaroop mode",
            "clear - Clear terminal",
        ]
    }),
    about: () => ({
        type: "normal",
        output: "I am Vijay, a full stack developer building modren web experiences."
    }),
    skills: () => ({
        type: "normal",
        output: "React, Next.js, TypeScript, PostgreSQL, Tailwind CSS",
    }),
    contact: () => ({
        type: "normal",
        output: "vijayx.in | x.com/vijayXcodes | github.com/vijayshankarmb",
    }),
    krishna: () => ({
        type: "mode",
        output: "The conch has been blown... Vishwaroop awakens."
    })
};

