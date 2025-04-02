'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Project type definition
type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
};

// Completed projects data
const completedProjects: Project[] = [
  {
    id: 'ai-chatbot',
    title: 'AI Consulting Chatbot',
    description: 'An intelligent chatbot that analyzes industry white papers and provides actionable insights for consulting clients.',
    tags: ['Python', 'NLP', 'AI'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'black-scholes',
    title: 'Black-Scholes Heatmap Visualization',
    description: 'Interactive visualization model for options pricing using the Black-Scholes formula with dynamic parameter adjustments.',
    tags: ['Python', 'Quant', 'Visualization'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'racing-game',
    title: '2D Racing Game',
    description: 'A fast-paced 2D racing game with physics-based movement and procedurally generated tracks.',
    tags: ['JavaScript', 'GameDev', 'Canvas'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'poker-bot',
    title: 'Poker Bot',
    description: 'An AI-powered poker bot that uses reinforcement learning to develop optimal strategies for Texas Hold\'em.',
    tags: ['Python', 'AI', 'Reinforcement Learning'],
    githubUrl: 'https://github.com',
  }
];

// Current projects data
const currentProjects: Project[] = [
  {
    id: 'quant-career',
    title: 'Quant Career Intelligence Tool',
    description: 'A tool that aggregates job postings, skill requirements, and salary data for quantitative finance roles.',
    tags: ['Python', 'Data Analysis', 'Web Scraping'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'quant-backtester',
    title: 'Multi-strategy Quant Trading Backtester',
    description: 'A comprehensive backtesting framework for evaluating multiple trading strategies across different market conditions.',
    tags: ['Python', 'Quant', 'Finance'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'trump-sentiment',
    title: 'Trump Tweet Sentiment Trading Algorithm',
    description: 'An algorithm that analyzes sentiment in Trump\'s tweets and generates trading signals for related market sectors.',
    tags: ['Python', 'NLP', 'Sentiment Analysis', 'Trading'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'volatility-dashboard',
    title: 'Multi-Technical Indicator Volatility Dashboard',
    description: 'A real-time dashboard visualizing multiple technical indicators for volatility analysis across various stocks.',
    tags: ['JavaScript', 'Data Visualization', 'Technical Analysis'],
    githubUrl: 'https://github.com',
  }
];

// Project card component
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-md transition-all">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag) => (
          <span key={tag} className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
        {project.description}
      </p>
      
      <div className="flex space-x-3">
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
          >
            <Github className="h-4 w-4 mr-1" />
            GitHub
          </a>
        )}
        
        {project.demoUrl && (
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
          >
            <ArrowUpRight className="h-4 w-4 mr-1" />
            Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Projects</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
        A collection of my work in AI, quantum computing, and quantitative trading.
      </p>
      
      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="current">In Progress</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Completed Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {completedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Current Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {currentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="completed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {completedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="current">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {currentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Interested in collaborating on a project?
        </p>
        <Button asChild>
          <Link href="/contact">
            Get in touch
          </Link>
        </Button>
      </div>
    </div>
  );
}
