import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Function to get a specific blog post by slug
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const postsDirectory = path.join(process.cwd(), 'src/app/blog/_posts');
    
    // Check if file exists with .mdx or .md extension
    let fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
      fullPath = path.join(postsDirectory, `${slug}.md`);
      if (!fs.existsSync(fullPath)) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }
    }
    
    // Read the markdown file as string
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);
    
    // Return the combined data
    return NextResponse.json({
      post: {
        slug,
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        tags: data.tags || [],
        author: data.author || '',
        content
      }
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
}
