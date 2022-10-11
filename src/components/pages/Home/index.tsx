import React from "react";
import {
  container,
  heading,
  heroDetails,
  heroImage,
  homeSection,
} from "./index.css";

const Home = (): React.ReactElement => {
  return (
    <div className={container}>
      <section className={homeSection}>
        <div className={heroDetails}>
          <h1 className={heading}>United Cleaning Corporation</h1>
          <h2>
            Specializing in kitchen exhaust systems &#38; equipment pressure
            washing since 1992
          </h2>
        </div>
        <img
          className={heroImage}
          src="/stock/002.jpg"
          alt="United Cleaning Hero Image"
          width={600}
          height="auto"
        />
      </section>
    </div>
  );
};

export default Home;
