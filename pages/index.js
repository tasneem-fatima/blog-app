import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../helpers/posts-util";

// const DUMMY_POSTS = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting started with Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJS is a framework for production",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs1",
//     title: "Getting started with Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJS is a framework for production",
//     date: "2022-02-10",
//   },
//   {
//     slug: "getting-started-with-nextjs2",
//     title: "Getting started with Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt: "NextJS is a framework for production",
//     date: "2022-02-10",
//   },
// ];
export default function Home(props) {
  return (
    <Fragment>
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
