import React from "react";
import Container from "../components/Container";
import Link from "next/link";

import "../styles/main.css";

const About = () => (
  <Container>
    <h1 className="text-4xl text-white-500">About Me</h1>
    <main>
      <p>
        I'm Matt Stewart-Ronnisch. I{" "}
        <a href="https://github.com/mattste">develop things</a>,{" "}
        <a href="https://vreps.us/about">grow teams</a> and consume excessive
        amounts of{" "}
        <Link href="/knowledge-base">
          <a>knowledge</a>
        </Link>
        .
      </p>
      <p>
        I'm currently the CTO of{" "}
        <a href="https://vreps.us/">Virtual Repetitions</a> where I've grown the
        engineering efforts of{" "}
        <a href="https://vreps.us/about">
          a small and mighty team since graduating from the University of
          Michigan in 2016
        </a>
        . Previously, I was President of{" "}
        <a href="https://michiganhackers.org/">Michigan Hackers</a>, a student
        organization dedicated to fostering a community of student hackers and
        makers.
      </p>
      <section>
        <h1>Technologies I have experience with:</h1>
        <ul>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>ExpressJS</li>
          <li>React</li>
          <li>Redux</li>
          <li>C++</li>
          <li>Python</li>
          <li>Elixir</li>
          <li>Phoenix</li>
          <li>Ecto</li>
        </ul>
        <p>
          Take a look at{" "}
          <Link href="/knowledge-base">
            <a>my knowledge base</a>
          </Link>{" "}
          to discover other technologies I've experimented with and learning
          materials I've consumed.
        </p>
      </section>
      <p>
        When I'm not coding, I love to be an amateur chef with a lot of help
        from my wife and <a href="https://www.theppk.com/">Isa Chandra</a>. I
        make the most of Portland's rainy season with video games (Overwatch
        being my game of choice), heading to board game night at the local
        brewery and taking pictures of my dogs in their rain coats. When it's
        sunny outside, my wife and I love to ditch our midwest flatland roots
        and experience the Pacific Northwest's beautiful hiking trails.
      </p>
    </main>
  </Container>
);

export default About;
