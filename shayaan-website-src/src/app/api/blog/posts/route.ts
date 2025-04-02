import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Function to get all blog posts
export async function GET(request: NextRequest) {
  try {
    const postsDirectory = path.join(process.cwd(), 'src/app/blog/_posts');
    
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      return NextResponse.json({ posts: [] });
    }
    
    // Get all files in the posts directory
    const fileNames = fs.readdirSync(postsDirectory);
    
    // Get the posts data
    const posts = fileNames
      .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
      .map(fileName => {
        // Remove the file extension to get the slug
        const slug = fileName.replace(/\.mdx?$/, '');
        
        // Read the markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        // Use gray-matter to parse the post metadata section
        const { data } = matter(fileContents);
        
        // Return the combined data
        return {
          slug,
          title: data.title || '',
          date: data.date || '',
          excerpt: data.excerpt || '',
          tags: data.tags || [],
          author: data.author || '',
        };
      })
      // Sort posts by date in descending order
      .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
    
    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}
