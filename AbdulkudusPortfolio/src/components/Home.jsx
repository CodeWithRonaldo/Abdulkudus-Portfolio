import React from "react";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="about">
        <div className="about-container">
          <h1>About Me</h1>
          <p>
          I started my crypto journey as a full-time trader before transitioning
          into community management. <br /> Before that, I spent about a year as a
          bounty hunter, writing articles for various crypto communities. <br /> That
          experience introduced me to the power of community engagement, and
          since then, <br />I’ve been deeply invested in building and managing
          thriving communities.
          </p>
          <div className="read-more-btn">
            <button >Read more about me</button>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Home;
