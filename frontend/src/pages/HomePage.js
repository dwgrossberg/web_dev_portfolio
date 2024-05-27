import React from "react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

function HomePage() {
  return (
    <>
      <h2>Home</h2>
      <article>
        <p>
          My career goal is to become a software engineer with a focus on
          developing tools that help to foster a more livable and sustainable
          future. I believe that creating high-quality software is essential for
          tackling modern challenges. My journey towards this goal developed
          over several years, during which I invested hundreds of hours into
          sharpening my problem-solving skills and design intuitive web
          applications. This experience was a slow and natural process, which
          grew out of my own curiosities and interests. Over time, however, I
          became convinced that I should rededicate myself to finding my forever
          career in field that aligns with my interests and passions.
        </p>
      </article>
      <h3>Portfolio Site Tech Stack</h3>
      <dl className="techStack">
        <dt>
          <SiMongodb />
          <strong>M</strong>ongoDB
        </dt>
        <dt>
          <SiExpress />
          <strong>E</strong>xpress
        </dt>
        <dt>
          <SiReact />
          <strong>R</strong>eact.js
        </dt>
        <dt>
          <SiNodedotjs />
          <strong>N</strong>ode.js
        </dt>
      </dl>
    </>
  );
}

export default HomePage;
