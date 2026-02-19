import { commands, CommandResult } from "@/config/commands";

const errorResponses = [
    "Unknown command. Krishna is disappointed.",
    "That command does not exist in this universe.",
    "Even Arjuna wouldn't type that.",
    "Invalid mantra detected.",
];

export const processCommand = (input: string): CommandResult => {
    const trimmed = input.trim().toLowerCase();

    const command = commands[trimmed];

    if (trimmed === "clear") {
        return {
            type: "normal",
            output: "",
        }
    }
    if (command) {
        return command();
    }

    return {
        type: "error",
        output: errorResponses[Math.floor(Math.random() * errorResponses.length)]
    }

}