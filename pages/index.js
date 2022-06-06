import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from '../components/home-page/hero';
import { getAllFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  return (
    <Fragment>
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