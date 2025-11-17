import type { User, Post, Question, Tag } from './types';
import { TOPICS } from './constants';
import { PlaceHolderImages } from './placeholder-images';

const users: User[] = [
  { id: 'u1', name: 'Alex Doe', avatarUrl: PlaceHolderImages.find(p => p.id === 'avatar1')?.imageUrl || '', title: 'Full Stack Developer' },
  { id: 'u2', name: 'Jane Smith', avatarUrl: PlaceHolderImages.find(p => p.id === 'avatar2')?.imageUrl || '', title: 'UI/UX Designer' },
  { id: 'u3', name: 'Sam Wilson', avatarUrl: PlaceHolderImages.find(p => p.id === 'avatar3')?.imageUrl || '', title: 'DevOps Engineer' },
  { id: 'u4', name: 'Maria Garcia', avatarUrl: PlaceHolderImages.find(p => p.id === 'avatar4')?.imageUrl || '', title: 'Product Manager' },
];

const tags: Tag[] = [
  { id: 'tag1', name: 'react' },
  { id: 'tag2', name: 'typescript' },
  { id: 'tag3', name: 'nextjs' },
  { id: 'tag4', name: 'tailwind' },
  { id: 'tag5', name: 'figma' },
  { id: 'tag6', name: 'ai' },
];

export const posts: Post[] = [
  {
    id: 'p1',
    title: 'The Future of Web Development with Next.js 15',
    content: 'Next.js 15 brings a ton of new features that will change how we build web applications. From improved performance to new APIs, this version is a game-changer for React developers...',
    imageUrl: PlaceHolderImages.find(p => p.id === 'postImage1')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'postImage1')?.imageHint,
    createdAt: '2 days ago',
    author: users[0],
    topic: TOPICS[1], // Programming
    tags: [tags[0], tags[2], tags[3]],
    stats: {
      likes: 128,
      views: 4500,
      comments: 32,
    },
  },
  {
    id: 'p2',
    title: 'Designing for Accessibility: A Comprehensive Guide',
    content: 'Accessibility is not an afterthought. In this post, we explore the core principles of accessible design and provide practical tips for creating inclusive user experiences in Figma and beyond.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'postImage2')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'postImage2')?.imageHint,
    createdAt: '5 days ago',
    author: users[1],
    topic: TOPICS[2], // Design
    tags: [tags[4]],
    stats: {
      likes: 95,
      views: 2800,
      comments: 15,
    },
  },
  {
    id: 'p3',
    title: 'Generative AI takes another leap forward',
    content: 'A new breakthrough in generative AI was announced today, promising to accelerate development in various fields. The model shows incredible capabilities in code generation and natural language understanding.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'postImage3')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'postImage3')?.imageHint,
    createdAt: '1 day ago',
    author: users[3],
    topic: TOPICS[0], // News
    tags: [tags[5]],
    stats: {
      likes: 256,
      views: 8900,
      comments: 78,
    },
  },
  {
    id: 'p4',
    title: 'Navigating Your Career Path in Tech',
    content: 'The tech industry is constantly evolving. How do you stay relevant and grow your career? This post discusses strategies for continuous learning, networking, and finding your niche.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'postImage4')?.imageUrl || '',
    imageHint: PlaceHolderImages.find(p => p.id === 'postImage4')?.imageHint,
    createdAt: '1 week ago',
    author: users[2],
    topic: TOPICS[3], // Career
    tags: [],
    stats: {
      likes: 72,
      views: 1500,
      comments: 21,
    },
  },
];

export const questions: Question[] = [
    {
        id: 'q1',
        title: 'How to properly handle state management in large-scale React applications?',
        content: 'I\'m working on a large project and struggling with prop-drilling and complex state logic. I\'ve looked into Redux, Zustand, and Context API, but I\'m not sure which one is the best fit. What are the pros and cons of each in a modern React (with hooks) environment?',
        createdAt: '3 hours ago',
        author: users[0],
        tags: [tags[0], tags[1]],
        stats: {
            votes: 15,
            answers: 4,
            views: 250,
        },
    },
    {
        id: 'q2',
        title: 'What are the best practices for responsive design in Tailwind CSS?',
        content: 'I find myself writing a lot of responsive utility classes like `md:`, `lg:`, etc. Is there a more efficient way to structure my components to be inherently responsive? How do you approach mobile-first design with Tailwind?',
        createdAt: '1 day ago',
        author: users[1],
        tags: [tags[3], tags[4]],
        stats: {
            votes: 8,
            answers: 2,
            views: 450,
        },
    }
];

export const getPosts = async () => {
    return posts;
}

export const getQuestions = async () => {
    return questions;
}
