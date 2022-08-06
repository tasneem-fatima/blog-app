import Head from "next/head";
import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../helpers/posts-util";

export default function Home(props) {
  return (
    <Fragment>
      <Head>
        <title>Tasneem's Blog</title>
        <meta name="description" content="I post about development"></meta>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
      {/* <h1>Basic code structure</h1> */}
    </Fragment>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}

// Planning Layout
// 1. Hero ==> Present ourselves
// 2. Featured Posts
