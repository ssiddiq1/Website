'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
      
      <div className={`transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-8 shadow-sm mb-12">
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-xl leading-relaxed mb-6">
              I'm Shayaan Siddique, a technologist and researcher working at the intersection of artificial intelligence, quantum computing, and quantitative trading.
            </p>
            
            <p className="mb-6">
              My background spans both theoretical and applied aspects of these fields, with a focus on developing innovative solutions that leverage cutting-edge technology to solve complex problems in finance and beyond.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Areas of Expertise</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Artificial Intelligence</h3>
            <p className="mb-4">
              I specialize in developing AI systems that can analyze complex datasets and provide actionable insights. My work includes natural language processing for financial document analysis, reinforcement learning for trading strategies, and computer vision applications.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Quantum Computing</h3>
            <p className="mb-4">
              My research explores how quantum algorithms can revolutionize computational finance and machine learning. I'm particularly interested in quantum optimization techniques and their applications to portfolio management and risk assessment.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Quantitative Trading</h3>
            <p className="mb-4">
              I develop and implement quantitative trading strategies that combine traditional financial theory with modern machine learning approaches. My focus is on creating robust systems that can adapt to changing market conditions while managing risk effectively.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Professional Journey</h2>
            <p className="mb-4">
              Throughout my career, I've collaborated with financial institutions, technology companies, and research organizations to bridge the gap between theoretical advances and practical applications. I believe in the power of interdisciplinary approaches to solve the most challenging problems in our field.
            </p>
            
            <p className="mb-4">
              When I'm not coding or researching, I enjoy sharing my knowledge through writing and speaking engagements. I'm passionate about making complex technical concepts accessible to broader audiences.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Let's Connect</h2>
            <p className="mb-6">
              I'm always open to interesting collaborations, research opportunities, or just connecting with like-minded professionals. Feel free to reach out through the contact page or connect with me on social media.
            </p>
          </div>
          
          <div className="mt-8">
            <Button asChild>
              <Link href="/contact">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
