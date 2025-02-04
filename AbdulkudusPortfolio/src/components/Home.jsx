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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Deserunt, ducimus est ex aliquid distinctio nemo in commodi
            excepturi nobis molestias mollitia <br /> neque esse, dicta a autem
            corrupti aspernatur delectus maiores?
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
