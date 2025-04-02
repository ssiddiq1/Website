'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { AlertCircle } from 'lucide-react';

// Simple password for admin access
const ADMIN_PASSWORD = 'shayaan123'; // In a real app, this would be stored securely

export default function AdminPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  
  // Blog post form state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [tags, setTags] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // In a real implementation, this would send data to an API endpoint
      // that would create a new .mdx file in the _posts directory
      
      // For demo purposes, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Format the content as a markdown file with frontmatter
      const date = new Date().toISOString().split('T')[0];
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      
      const formattedContent = `---
title: "${title}"
date: "${date}"
excerpt: "${excerpt}"
tags: [${tags.split(',').map(tag => `"${tag.trim()}"`).join(', ')}]
author: "Shayaan Siddique"
---

${content}`;
      
      console.log('New blog post:', formattedContent);
      
      // Reset form
      setTitle('');
      setContent('');
      setExcerpt('');
      setTags('');
      setSubmitMessage('Blog post created successfully! In a production environment, this would save to the filesystem.');
    } catch (error) {
      console.error('Error creating blog post:', error);
      setSubmitMessage('Error creating blog post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[70vh]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Enter your password to access the admin area</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>
                {error && (
                  <div className="text-red-500 text-sm flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {error}
                  </div>
                )}
              </div>
              <Button className="w-full mt-4" type="submit">Login</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Blog Admin</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Create New Blog Post</CardTitle>
          <CardDescription>
            Fill out the form below to create a new blog post. The content supports Markdown formatting.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter post title"
                  required
                />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Input 
                  id="excerpt" 
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Brief summary of the post"
                  required
                />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="tags">Tags</Label>
                <Input 
                  id="tags" 
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Comma-separated tags (e.g., AI, quantum computing)"
                  required
                />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="content">Content (Markdown)</Label>
                <Textarea 
                  id="content" 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your blog post content here using Markdown..."
                  className="min-h-[300px]"
                  required
                />
              </div>
              
              {submitMessage && (
                <div className={`text-sm ${submitMessage.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                  {submitMessage}
                </div>
              )}
              
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Creating...' : 'Create Post'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
