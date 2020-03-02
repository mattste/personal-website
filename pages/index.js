import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import "../styles/main.css";

const Index = () => (
  <Container>
    <main className="flex-auto flex flex-col justify-end">
      <div className="mb-10">
        <h1 className="text-6xl md:text-11xl text-teal">Hello,</h1>
        <h1 className="text-6xl md:text-11xl lg:text-14xl font-bold text-teal">
          I'm Matt.
        </h1>
      </div>

      <p className="md:max-w-xl text-xl leading-normal font-light">
        I'm a software engineer with experience in full-stack web development
        based out of Portland, Oregon. Currently, I'm the CTO of{" "}
        <a href="https://vreps.us">Virtual Repetitions</a>.
      </p>
      <section className="mt-10 flex">
        <a href="https://twitter.com/matt_stewart_" className="mr-4">
          <img
            src="/icons/twitter-logo-white.svg"
            alt="twitter logo"
            width="30"
            height="30"
          />
        </a>
        <a href="mailto:mattdste@gmail.com">
          <img
            src="/icons/email-logo-white.svg"
            alt="email logo"
            width="30"
            height="30"
          />
        </a>
      </section>
    </main>
  </Container>
);

export default Index;
