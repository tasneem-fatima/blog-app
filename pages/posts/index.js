import Head from "next/head";
import React, { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/posts-util";

const AllPostsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming related tutorials" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};
export function getStaticProps() {
  const allPosts = getAllPosts()
  return {
    props: {
      posts: allPosts
    }
  }
}
export default AllPostsPage;
