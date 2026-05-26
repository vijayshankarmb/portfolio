import Container from '@/components/ui/Container';
import { Link } from 'next-view-transitions';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import React from 'react';

export const metadata = {
    title: 'AI Research Assistant | Projects | Vijay',
    description: 'A production-grade AI research assistant built with modern LLM application architecture.',
};

export default function AIResearchAssistantDetails() {
    return (
        <Container className="min-h-screen py-16 md:border md:border-b-0 space-y-12">
            {/* Back Link */}
            <div>
                <Link href="/projects" className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                </Link>
            </div>

            {/* Header */}
            <div className="space-y-6 border-b pb-12 border-neutral-200 dark:border-neutral-800">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">AI Research Assistant</h1>
                <p className="text-xl text-neutral-500 max-w-3xl leading-relaxed">
                    A production-grade AI research assistant built with modern LLM application architecture using FastAPI, Next.js, LangChain, Gemini, ChromaDB, PostgreSQL, and Tavily Search.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                    <Link href="https://github.com/vijayshankarmb/ai-research-assistant" target="_blank" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                        <Github className="mr-2 h-4 w-4" />
                        View Source
                    </Link>
                    <Link href="https://ai-research-assistant.vijayx.in/" target="_blank" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl space-y-12 text-neutral-800 dark:text-neutral-300 text-lg leading-relaxed">
                
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary">Overview</h2>
                    <p>
                        The platform combines conversational AI, Retrieval-Augmented Generation (RAG), streaming responses, persistent memory, and AI tool-calling workflows to deliver context-aware research and document intelligence experiences.
                    </p>
                </section>

                <section className="space-y-8">
                    <h2 className="text-2xl font-semibold text-primary border-b border-neutral-200 dark:border-neutral-800 pb-2">Features</h2>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl font-medium text-primary">Conversational AI System</h3>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
                            <li>Real-time streaming AI responses</li>
                            <li>Persistent multi-session conversations</li>
                            <li>Context-aware memory handling</li>
                            <li>Session restoration and history tracking</li>
                            <li>Dynamic AI tool-calling workflows</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-medium text-primary">Retrieval-Augmented Generation (RAG)</h3>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
                            <li>PDF upload and ingestion pipeline</li>
                            <li>Semantic chunking and embeddings generation</li>
                            <li>Vector search using ChromaDB</li>
                            <li>Contextual document retrieval</li>
                            <li>Source citation rendering</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-medium text-primary">AI Tool Calling</h3>
                        <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
                            <li>Integrated Tavily web search tool</li>
                            <li>Real-time information retrieval</li>
                            <li>AI-controlled tool selection</li>
                            <li>Context-aware response augmentation</li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary border-b border-neutral-200 dark:border-neutral-800 pb-2">System Architecture</h2>
                    <div className="bg-neutral-950 rounded-xl p-6 overflow-x-auto text-neutral-300 text-sm font-mono border border-neutral-800">
                        <pre>
{`Next.js Frontend
        ↓
FastAPI API Layer
        ↓
AI Service Layer
 ├── Conversational AI
 ├── RAG Pipeline
 ├── Tool Calling
 └── Web Search Integration
        ↓
Gemini API + ChromaDB
        ↓
PostgreSQL Persistence`}
                        </pre>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary border-b border-neutral-200 dark:border-neutral-800 pb-2">Tech Stack</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-xl border border-neutral-100 dark:border-neutral-800">
                            <h3 className="font-medium mb-3 text-primary">Frontend</h3>
                            <ul className="list-disc pl-4 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                                <li>Next.js & React</li>
                                <li>TypeScript</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </div>
                        <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-xl border border-neutral-100 dark:border-neutral-800">
                            <h3 className="font-medium mb-3 text-primary">Backend</h3>
                            <ul className="list-disc pl-4 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                                <li>FastAPI</li>
                                <li>Python</li>
                                <li>SQLAlchemy</li>
                            </ul>
                        </div>
                        <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-xl border border-neutral-100 dark:border-neutral-800">
                            <h3 className="font-medium mb-3 text-primary">AI Stack</h3>
                            <ul className="list-disc pl-4 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                                <li>LangChain</li>
                                <li>Gemini 3.1 Flash Lite</li>
                                <li>Tavily Search API</li>
                                <li>ChromaDB</li>
                            </ul>
                        </div>
                        <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-xl border border-neutral-100 dark:border-neutral-800">
                            <h3 className="font-medium mb-3 text-primary">Infrastructure</h3>
                            <ul className="list-disc pl-4 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                                <li>Neon PostgreSQL</li>
                                <li>Vercel</li>
                                <li>Railway</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="space-y-4 pb-16">
                    <h2 className="text-2xl font-semibold text-primary border-b border-neutral-200 dark:border-neutral-800 pb-2">Future Improvements</h2>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
                        <li>LangGraph workflow orchestration</li>
                        <li>Multi-agent research pipelines</li>
                        <li>Persistent vector storage</li>
                        <li>Redis caching & background task processing</li>
                        <li>Dockerized deployment</li>
                        <li>OAuth login & production observability</li>
                    </ul>
                </section>
            </div>
        </Container>
    );
}
