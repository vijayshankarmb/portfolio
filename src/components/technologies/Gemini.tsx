export default function Gemini() {
    return (
        <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
        >
            <defs>
                <radialGradient id="geminiGradient" cx="30%" cy="20%" r="80%">
                    <stop offset="0%" stopColor="#4285f4" />
                    <stop offset="40%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#1a73e8" />
                </radialGradient>
            </defs>
            <path
                d="M100 10 C100 10, 87 100, 10 100 C10 100, 87 100, 100 190 C100 190, 113 100, 190 100 C190 100, 113 100, 100 10 Z"
                fill="url(#geminiGradient)"
            />
        </svg>
    );
}