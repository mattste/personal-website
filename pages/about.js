import React from "react";
import Container from "../components/Container";
import Link from "next/link";

import "../styles/main.css";

const About = () => (
  <Container>
    <div className="mt-12 md:px-10 md:text-2xl">
      <h1 className="text-5xl text-teal">About Me</h1>
      <main className="mt-10">
        <section>
          <p>
            I'm Matt Stewart-Ronnisch. I{" "}
            <a href="https://github.com/mattste">develop things</a>,{" "}
            <a href="https://vreps.us/about">grow teams</a> and consume
            excessive amounts of{" "}
            <Link href="/knowledge-base">
              <a>knowledge</a>
            </Link>
            .
          </p>
          <p className="mt-6">
            I'm currently the CTO of{" "}
            <a href="https://vreps.us/">Virtual Repetitions</a> where I've grown
            the engineering efforts of{" "}
            <a href="https://vreps.us/about">
              a small and mighty team since graduating from the University of
              Michigan in 2016
            </a>
            . Previously, I was President of{" "}
            <a href="https://michiganhackers.org/">Michigan Hackers</a>, a
            student organization dedicated to fostering a community of student
            hackers and makers.
          </p>
        </section>
        <section className="mt-6">
          <h1>Technologies I have experience with:</h1>
          <div className="flex">
            <ul className="mt-2 list-disc list-inside col-2">
              <li className="mr-8">Javascript</li>
              <li className="mr-8">Typescript</li>
              <li className="mr-8">Node.js</li>
              <li className="mr-8">ExpressJS</li>
              <li className="mr-8">GraphQL</li>
              <li className="mr-8">React</li>
              <li className="mr-8">Redux</li>
              <li className="mr-8">C++</li>
              <li className="mr-8">Python</li>
              <li className="mr-8">Elixir</li>
              <li className="mr-8">Phoenix</li>
              <li className="mr-8">Ecto</li>
            </ul>
          </div>
          <p className="mt-6">
            Take a look at{" "}
            <Link href="/knowledge-base">
              <a>my knowledge base</a>
            </Link>{" "}
            to discover other technologies I've experimented with and learning
            materials I've consumed.
          </p>
        </section>
        <section>
          <p className="mt-6">
            When I'm not coding, I love to be an amateur chef with a lot of help
            from my wife and{" "}
            <a href="https://www.theppk.com/">Chef Isa Chandra</a>. I make the
            most of Portland's rainy season with video games (Overwatch being my
            game of choice), heading to board game night at the local brewery
            and taking pictures of my dogs in their rain coats. When it's sunny
            outside, my wife and I love to ditch our midwest flatland roots and
            experience the Pacific Northwest's beautiful hiking trails.
          </p>
        </section>
      </main>
    </div>
  </Container>
);

export default About;
