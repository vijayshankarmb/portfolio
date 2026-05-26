import Container from '@/components/ui/Container';
import { Link } from 'next-view-transitions';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import React from 'react';

export const metadata = {
    title: 'Nexus AI | Projects | Vijay',
    description: 'Production-grade multi-agent AI research system',
};

export default function NexusAIDetails() {
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
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">Nexus AI</h1>
                <p className="text-xl text-neutral-500 max-w-3xl leading-relaxed">
                    Production-grade multi-agent AI research system built with FastAPI, LangGraph, Gemini, PostgreSQL, and Docker.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                    <Link href="https://github.com/vijayshankarmb/nexus-ai.git" target="_blank" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                        <Github className="mr-2 h-4 w-4" />
                        View Source
                    </Link>
                    <Link href="https://nexus-ai.vijayx.in/" target="_blank" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
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
                        Nexus AI is a backend-focused multi-agent AI platform that simulates an autonomous research workflow. 
                        Instead of relying on a single prompt-response interaction, the system coordinates multiple AI agents 
                        through a LangGraph execution pipeline where each agent performs a specialized task such as:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
                        <li>Query analysis</li>
                        <li>Research planning</li>
                        <li>Web information gathering</li>
                        <li>Context aggregation</li>
                        <li>Report generation</li>
                        <li>Final summarization</li>
                    </ul>
                    <p>
                        The platform supports real-time streaming responses, tool calling, persistent report storage, and production-ready deployment using Docker.
                    </p>
                </section>

                <section className="space-y-8">
                    <h2 className="text-2xl font-semibold text-primary border-b border-neutral-200 dark:border-neutral-800 pb-2">Core Capabilities</h2>
                    
                    <div className="space-y-4">
                        <h3 className="text-xl font-medium text-primary">Multi-Agent Orchestration</h3>
                        <p>
                            Built using LangGraph to coordinate multiple AI agents through a stateful execution graph. 
                            Agents operate independently while sharing structured state across the workflow.
                        </p>
                        <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-lg p-6 border border-neutral-100 dark:border-neutral-800">
                            <h4 className="font-medium mb-3 text-primary">Current Agent Pipeline:</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                                <li>Research Planner Agent</li>
                                <li>Web Search Agent</li>
                                <li>Context Collection Agent</li>
                                <li>Summarizer Agent</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-medium text-primary">Tool Calling & Web Search</h3>
                        <p>
                            Integrated tool-calling architecture allows agents to dynamically invoke external tools during execution.
                            Current tools include real-time web search and external context retrieval.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-medium text-primary">Streaming AI Responses</h3>
                        <p>
                            Implements asynchronous token streaming for real-time response generation. 
                            Supports ChatGPT-style incremental output delivery using FastAPI streaming responses.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-medium text-primary">Persistent Research Storage & Cloud Native</h3>
                        <p>
                            Research reports and session outputs are stored in PostgreSQL using SQLAlchemy ORM. 
                            The system is designed around cloud-first infrastructure principles, integrating the Gemini API for LLM inference and Neon PostgreSQL for managed database hosting.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary border-b border-neutral-200 dark:border-neutral-800 pb-2">System Architecture</h2>
                    <div className="bg-neutral-950 rounded-xl p-6 overflow-x-auto text-neutral-300 text-sm font-mono border border-neutral-800">
                        <pre>
{`                ┌─────────────────────┐
                │     Frontend UI     │
                └─────────┬───────────┘
                          │
                          ▼
                ┌─────────────────────┐
                │    FastAPI Server   │
                └─────────┬───────────┘
                          │
                          ▼
                ┌─────────────────────┐
                │   LangGraph Engine  │
                └─────────┬───────────┘
                          │
      ┌───────────────────┼───────────────────┐
      ▼                   ▼                   ▼
┌──────────────┐  ┌──────────────┐  ┌────────────────┐
│ Planner Agent│  │ Search Agent │  │ Summary Agent  │
└──────┬───────┘  └──────┬───────┘  └────────┬───────┘
       │                 │                   │
       ▼                 ▼                   ▼
 ┌───────────┐    ┌────────────┐      ┌─────────────┐
 │ Gemini API│    │ Web Search │      │ PostgreSQL  │
 └───────────┘    └────────────┘      └─────────────┘`}
                        </pre>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-primary border-b border-neutral-200 dark:border-neutral-800 pb-2">Tech Stack</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-xl border border-neutral-100 dark:border-neutral-800">
                            <h3 className="font-medium mb-3 text-primary">Backend</h3>
                            <ul className="list-disc pl-4 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                                <li>Python</li>
                                <li>FastAPI</li>
                                <li>LangGraph</li>
                                <li>LangChain</li>
                                <li>SQLAlchemy</li>
                            </ul>
                        </div>
                        <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-xl border border-neutral-100 dark:border-neutral-800">
                            <h3 className="font-medium mb-3 text-primary">AI Services</h3>
                            <ul className="list-disc pl-4 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                                <li>Gemini 3.1 Flash Lite</li>
                                <li>Tool Calling</li>
                                <li>Streaming Response</li>
                                <li>Agentic Workflows</li>
                            </ul>
                        </div>
                        <div className="bg-neutral-50 dark:bg-neutral-900/50 p-6 rounded-xl border border-neutral-100 dark:border-neutral-800">
                            <h3 className="font-medium mb-3 text-primary">Infrastructure</h3>
                            <ul className="list-disc pl-4 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                                <li>PostgreSQL</li>
                                <li>Neon Database</li>
                                <li>Docker</li>
                                <li>Render</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="space-y-4 pb-16">
                    <h2 className="text-2xl font-semibold text-primary border-b border-neutral-200 dark:border-neutral-800 pb-2">Roadmap & Future Plans</h2>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
                        <li>Retrieval-Augmented Generation (RAG) and PDF ingestion pipeline</li>
                        <li>Authentication & RBAC</li>
                        <li>Redis caching layer and background task workers</li>
                        <li>Vector database integration</li>
                        <li>Agent memory systems</li>
                        <li>Observability, tracing, and multi-user workspace support</li>
                    </ul>
                </section>
            </div>
        </Container>
    );
}
