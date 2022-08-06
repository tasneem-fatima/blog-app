import Head from "next/head";
import React, { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../helpers/posts-util";

const PostDetailsPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.content}></meta>
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  )
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);
  return {
    props: {
      post: postData
    },
    revalidate: 600
  }
}
export function getStaticPaths() {
  const postFileName = getPostsFiles();

  const slugs = postFileName.map((fileName) => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false
  }
}
export default PostDetailsPage;
