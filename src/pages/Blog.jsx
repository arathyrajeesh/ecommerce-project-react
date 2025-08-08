import React from 'react';
import '../styles/Blog.css';
import { blogPosts } from '../data/Blog';

const Blog = () => {
    return (
        <div className="blog-page-container">
        <h1 className="blog-heading">BLOG</h1>

        <div className="blog-header-options">
            <span>All Posts</span>
        </div>

        <div className="blog-posts-grid">
            {blogPosts.map(post => (
            <div key={post.id} className="blog-post-card">
                <img src={post.image} alt={post.title} className="blog-post-image" />

                <div className="blog-post-content">
                <div className="post-meta">
                    <span>{post.author}</span>
                    <span> | {post.date}</span>
                    <span> - {post.readTime}</span>
                </div>

                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-summary">{post.summary}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Blog;
