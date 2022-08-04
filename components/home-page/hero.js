import React from "react";
import Image from "next/image";
import classes from "./hero.module.css";
const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An image showing Tasneem"
          height={300}
          width={300}
        />
      </div>
      <h1>Hi, I am Tasneem</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        React.
      </p>
    </section>
  );
};

export default Hero;
