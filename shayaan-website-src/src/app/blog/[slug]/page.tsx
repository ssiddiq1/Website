'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import ReactMarkdown from 'react-markdown';

// Type for blog post
type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  author: string;
  content: string;
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

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/post/${slug}`);
        if (!response.ok) {
          throw new Error(response.status === 404 ? 'Post not found' : 'Failed to fetch post');
        }
        const data = await response.json();
        setPost(data.post);
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="animate-pulse space-y-8">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold mb-4">
            {error || 'Post not found'}
          </h1>
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to all posts
      </Link>
      
      <article className="prose dark:prose-invert lg:prose-lg max-w-none">
        <header className="mb-8 not-prose">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
            <span>{formatDate(post.date)}</span>
            <span className="mx-2">•</span>
            <span>By {post.author}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span key={tag} className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </header>
        
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}
