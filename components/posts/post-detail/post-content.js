import React from "react";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";
const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting started with Nextjs",
  image: "getting-started-nextjs.png",
  excerpt: "NextJS is a framework for production",
  date: "2022-02-10",
  content: '# This is a first post'
}
const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
  return <article>
    <PostHeader title={DUMMY_POST.title} image={imagePath} />
    {DUMMY_POST.content}
  </article>
};

export default PostContent;
