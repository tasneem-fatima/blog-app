import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import reactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";

// const DUMMY_POST = {
//   slug: "getting-started-with-nextjs",
//   title: "Getting started with Nextjs",
//   image: "getting-started-nextjs.png",
//   excerpt: "NextJS is a framework for production",
//   date: "2022-02-10",
//   content: '# This is a first post'
// }
const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image src={`/images/posts/${post.slug}/${image.src}`} />
    //   )
    // },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300} />
          </div>
        );
      }
    },

  }


  return <article className={classes.content}>
    <PostHeader title={post.title} image={imagePath} />
    <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
  </article>
};

export default PostContent;
