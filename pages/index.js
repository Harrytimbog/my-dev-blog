import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from '../components/home-page/hero';

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

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  )
}

export default HomePage;