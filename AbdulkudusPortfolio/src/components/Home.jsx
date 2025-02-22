import React from "react";
import Hero from "./Hero";
import About from "./About";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="about">
        <div className="home-about-container">
          <h1>About Me</h1>
          <p>
            I started my crypto journey as a full-time trader before
            transitioning into community management. <br /> Before that, I spent
            about a year as a bounty hunter, writing articles for various crypto
            communities. <br /> That experience introduced me to the power of
            community engagement, and since then, <br />
            I’ve been deeply invested in building and managing thriving
            communities.
          </p>
          <div className="read-more-btn">
            <Link to='/about'>
              <button>Read more about me</button>
            </Link>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Home;
