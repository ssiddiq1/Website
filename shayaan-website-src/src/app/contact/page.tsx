'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would send data to an API endpoint
      // that would handle email sending or form submission
      
      // For demo purposes, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-12">
        Have a question or want to work together? Get in touch.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                  />
                </div>
                
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message"
                    className="min-h-[150px]"
                    required
                  />
                </div>
                
                {submitStatus === 'success' && (
                  <div className="text-green-500 text-sm">
                    Your message has been sent successfully!
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-red-500 text-sm">
                    There was an error sending your message. Please try again.
                  </div>
                )}
                
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        {/* Contact Info */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href="mailto:contact@shayaansiddique.com" 
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                contact@shayaansiddique.com
              </a>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Connect</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5 mr-2" />
                  Twitter
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
