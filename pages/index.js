import { Fragment } from "react";
import Head from 'next/head';
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from '../components/home-page/hero';
import { getAllFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Timi's Blog</title>
        <meta 
          name='description' 
          content='I post about Programming and my general Experiences in Life.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts = getAllFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  };
}

export default HomePage;