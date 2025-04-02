'use client';

import { useState, useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Type for blog post metadata
type PostMetadata = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  author: string;
};

// Function to format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default function BlogPage() {
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch blog posts
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Blog</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
        Thoughts and insights on AI, quantum computing, and quantitative trading.
      </p>

      {isLoading ? (
        <div className="flex justify-center py-20">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-600 dark:text-gray-400">No blog posts found.</p>
        </div>
      ) : (
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 dark:border-gray-800 pb-12 last:border-0">
              <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                {formatDate(post.date)}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <Link href={`/blog/${post.slug}`} className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span key={tag} className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
