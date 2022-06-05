import React from 'react'
import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production - It ships with SSR. I love it so much',
    date: '2022-02-10',
  },
  {
    slug: 'getting-finished-with-nextjs',
    title: 'Getting Finished with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production - It ships with SSR. I love it so much',
    date: '2022-02-10',
  },
  {
    slug: 'getting-busy-with-nextjs',
    title: 'Getting Busy with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production - It ships with SSR. I love it so much',
    date: '2022-02-10',
  },
  {
    slug: 'getting-naughty-with-nextjs',
    title: 'Getting Naughty with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJS is the React framework for production - It ships with SSR. I love it so much',
    date: '2022-02-10',
  },
];


const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage;