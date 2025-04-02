'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-black/[0.02]" />
        
        {/* Animated background elements */}
        <div className={`absolute top-20 right-20 w-64 h-64 rounded-full bg-white/5 dark:bg-black/20 blur-3xl transition-all duration-1000 ${isLoaded ? 'opacity-70' : 'opacity-0'}`} />
        <div className={`absolute bottom-20 left-20 w-96 h-96 rounded-full bg-white/10 dark:bg-black/10 blur-3xl transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-70' : 'opacity-0'}`} />
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className={`text-5xl md:text-7xl font-bold tracking-tight mb-6 transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                Shayaan Siddique
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 transition-all duration-700 delay-150 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Exploring the intersections of <span className="font-semibold">AI</span>, <span className="font-semibold">quantum computing</span>, and <span className="font-semibold">quantitative trading</span>.
            </p>
            
            <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Button asChild className="rounded-full">
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/blog">
                  Read Blog <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className={`mt-12 flex justify-center space-x-6 transition-all duration-700 delay-450 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Glitchy element inspired by Apple design */}
        <div className={`absolute bottom-10 w-full flex justify-center transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="glitch-container relative w-32 h-1 overflow-hidden">
            <div className="glitch-line w-full h-px bg-gradient-to-r from-transparent via-gray-500 dark:via-gray-300 to-transparent"></div>
          </div>
        </div>
      </section>
      
      {/* Latest Blog Post Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Latest Insights</h2>
            
            {/* This would be dynamically populated with actual blog data */}
            <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-all">
              <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">April 2, 2025</div>
              <h3 className="text-2xl font-bold mb-4">Quantum Computing: The Next Frontier in AI Development</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Exploring how quantum computing algorithms are poised to revolutionize machine learning models and create unprecedented opportunities for AI advancement...
              </p>
              <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Preview */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-2">AI Consulting Chatbot</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded-full">Python</span>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded-full">NLP</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                  An intelligent chatbot that analyzes industry white papers and provides actionable insights.
                </p>
                <Link href="/projects" className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                  View project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              {/* Project 2 */}
              <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold mb-2">Black-Scholes Heatmap</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded-full">Quant</span>
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded-full">Visualization</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                  Interactive visualization model for options pricing using the Black-Scholes formula.
                </p>
                <Link href="/projects" className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                  View project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild variant="outline">
                <Link href="/projects">
                  View all projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CSS for glitchy animation */}
      <style jsx>{`
        @keyframes glitch {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .glitch-line {
          animation: glitch 3s infinite linear;
        }
        
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        
        .bg-grid-black {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </div>
  );
}
