import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import KnowledgeBaseList from "../components/KnowledgeBaseList";
import data from "../data/knowledge_base.json";

import "../styles/main.css";

const KnowledgeBasePage = () => (
  <Container>
    <div className="mt-12 md:px-10 md:text-2xl">
      <h1 className="text-5xl text-teal">Knowledge Base</h1>
      <main>
        <section className="mt-4">
          <p>
            In my free time, I love to learn and experiment with new
            technologies and paradigms. I believe software engineering is a
            constant battle of design decisions with trade-offs at every step of
            the process. I strive to equip myself with the tools and knowledge
            that help make these decisions more informed. Sometimes the shiny
            new thing can be dangerous when working with a small team but there
            may lessons to learn from it.
          </p>

          <p className="mt-4">
            Below is an assorted collection of links that have impacted me. It's
            a public catalogue that I hope others may find useful.
          </p>
        </section>
        <KnowledgeBaseList
          title="Blog Posts"
          items={data["blogPosts"]}
          rootClasses="mt-6"
        />
        <KnowledgeBaseList
          title="Books"
          items={data["books"]}
          rootClasses="mt-6"
        />
        <KnowledgeBaseList
          title="Tech Talks"
          items={data["videos"]}
          rootClasses="mt-6"
        />
        <KnowledgeBaseList
          title="Podcasts"
          items={data["podcasts"]}
          rootClasses="mt-6"
        />
      </main>
    </div>
  </Container>
);

export default KnowledgeBasePage;
