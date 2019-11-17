import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";

import "../styles/main.css";

const KnowledgeBasePage = () => (
  <Container>
    <h1>Knowledge Base</h1>
    <p>
      In my free time, I love to learn and experiment with new technologies and
      paradigms. I believe software engineering is a constant battle of design
      decisions with trade-offs at every step of the process. I strive to equip
      myself with the tools and knowledge that help make these decisions more
      informed. Sometimes the shiny new thing can be dangerous when working with
      a small team but there may lessons to learn from it.
    </p>

    <p>
      Below is an assorted collection of links that have impacted me. It's a
      public catalogue that I hope others may find useful.
    </p>
    <h2>Blog posts</h2>
    <ul>
      <li>
        <a href="http://blog.plataformatec.com.br/2015/10/mocks-and-explicit-contracts/">
          Mocks and Explicit Contracts
        </a>
      </li>
      <li>
        <a href="https://www.cockroachlabs.com/blog/how-we-built-a-vectorized-sql-engine/#">
          How We Built a Vectorized SQL Engine - Cockroach Labs
        </a>
      </li>
      <li>
        <a href="http://udayv.com/clojurescript/clojure/2016/04/28/datascript101/">
          Datascript 101 · verma/blog
        </a>
      </li>
      <li>
        <a href="https://kasvith.github.io/posts/lets-create-a-simple-lb-go/">
          Let's Create a Simple Load Balancer With Go - kasvith.github.io - a pe
        </a>
      </li>
      rsonal blog space
      <li>
        <a href="https://www.figma.com/blog/how-figmas-multiplayer-technology-works/">
          How Figma’s multiplayer technology works
        </a>
      </li>
      <li>
        <a href="https://segment.com/blog/introducing-centrifuge/">
          Centrifuge: a reliable system for delivering billions of ev
        </a>
      </li>
      ents per day · Segment Blog
      <li>
        <a href="https://segment.com/blog/the-10m-engineering-problem/">
          The $10m engineering problem · Segment Blog
        </a>
      </li>
      <li>
        <a href="https://developer.squareup.com/blog/books-an-immutable-double-entry-accounting-database-service/">
          Books, an immutable double-entry accounting database service | Square
          Corner Blog
        </a>
      </li>
      <li>
        <a href="http://blog.plataformatec.com.br/2012/06/why-your-web-framework-should-not-adopt-rack-api/">
          Why your web framework should not adopt Rack API « Plataformatec Blog
        </a>
      </li>
      <li>
        <a href="https://hacks.mozilla.org/2019/08/webassembly-interface-types/">
          WebAssembly Interface Types: Interoperate with All the Things! -
          Mozilla
        </a>
      </li>
      Hacks - the Web developer blog
      <li>
        <a href="https://ruslanspivak.com/lsbaws-part2/">
          Let’s Build A Web Server. Part 2. - Ruslan's Blog
        </a>
      </li>
      <li>
        <a href="http://renderedtext.com/blog/2015/11/18/closures-are-not-magic/">
          Closures are not magic - Rendered Text
        </a>
      </li>
      <li>
        <a href="https://atscaleconference.com/videos/cadence-microservice-architecture-beyond-requestreply/">
          Cadence: Microservice architecture beyond request/reply – @Scale
        </a>
      </li>
      <li>
        <a href="http://alvaro-videla.com/2015/12/learning-about-distributed-systems.html">
          What We Talk About When We Talk About Distributed Systems
        </a>
      </li>
      <li>
        <a href="https://www.brunton-spall.co.uk/post/2014/05/06/database-migrations-done-right/">
          Database migrations done right | Michael Brunton-Spall on …
        </a>
      </li>
      <li>
        <a href="https://spring.io/blog/2016/05/31/zero-downtime-deployment-with-a-database">
          Zero Downtime Deployment with a Database
        </a>
      </li>
      <li>
        <a href="https://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/">
          Understanding JavaScript Function Invocation and "this"
        </a>
      </li>
      <li>
        <a href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/">
          Tasks, microtasks, queues and schedules - JakeArchibald.com
        </a>
      </li>
      <li>
        <a href="https://robotlolita.me/articles/2015/how-do-promises-work/">
          How do Promises Work? - Quil's Fluffy World
        </a>
      </li>
      <li>
        <a href="HTTP/2 is here, let's optimize! - Velocity SC 2015 - Google Slides"></a>
      </li>
      <li>
        <a href="https://docs.google.com/presentation/d/1r7QXGYOLCh4fcUq0jDdDwKJWNqWK1o4xMtYpKZCJYjM/present?slide=id.g518e3c87f_4_0"></a>
      </li>
    </ul>
    <ul>
      <li></li>
    </ul>
    <h2>Books</h2>
    <ul>
      <li>
        <a href="http://programmingcomputervision.com/">
          Programming Computer Vision with Python
        </a>
      </li>
      <li>
        <a href="https://pragprog.com/book/phoenix14/programming-phoenix-1-4">
          Programming Phoenix
        </a>
      </li>
      <li>
        <a href="https://flaskbook.com/">Flask Book</a>
      </li>
    </ul>
    <h2>Tech talks</h2>
    <ul>
      <li>
        <a href="https://youtu.be/yTkzNHF6rMs">Boundaries</a>
      </li>
      <li>
        <a href="https://youtu.be/npOGOmkxuio">Rules</a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=hgDCg3QdZgU&list=PLHiuN2KDn0H2Pt5vWbFIZriEgqpCaR4cH">
          Modular Design in Elixir
        </a>
      </li>
      <li>
        <a href="https://youtu.be/lg7M0h9eoug">
          Building Resilient Systems with Stacking
        </a>
      </li>
      <li>
        <a href="https://youtu.be/CGpMlWVcHok">
          Building a Custom React Renderer
        </a>
      </li>
      <li>
        <a href="https://youtu.be/lBaDmsFTJxY">
          Writing an Ecto Adapter Introducing MyXQL
        </a>
      </li>
      <li>
        <a href="https://youtu.be/nLApFANtkHs">
          Docker and OTP Friends or Foes
        </a>
      </li>
      <li>
        <a href="https://youtu.be/1QNxLNMq3Uw">
          Introducing Scenic A Functional UI Framework
        </a>
      </li>
      <li>
        <a href="https://youtu.be/YQxopjai0CU">Thinking In Ecto</a>
      </li>
      <li>
        <a href="https://youtu.be/UcqRXTriUVI">
          React Native's New Architecture
        </a>
      </li>
      <li>
        <a href="https://youtu.be/V-QO-KO90iQ">React Today and Tomorrow</a>
      </li>
      <li>
        <a href="https://youtu.be/ByBPyMBTzM0">Concurrent Rendering in React</a>
      </li>
      <li>
        <a href="https://youtu.be/wXLf18DsV-I">Cleaner React With Hooks</a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=fHQ1WSx41CA">
          Building (And Re-Building) the Airbnb Design System
        </a>
      </li>

      <li>
        <a href="https://www.youtube.com/watch?v=coFIEH3vXPw">
          Run containers on bare metal already!
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=fHQ1WSx41CA">
          Building (And Re-Building) the Airbnb Design System | Maja Wichrowska
          & Tae Kim
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=gCWtkvDQ2ZI">
          "Unison: a new distributed programming language" by Paul Chiusano
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=CMB6AlE1QuI">
          Rust, WebAssembly, and the future of Serverless by Steve Klabnik
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=tpo3JUyVIjQ">
          ElixirConf 2019 - Contracts for Building Reliable Systems - Chris
          Keathley
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=47VOcGGm6aU&t=2s">
          From Monorail to Monorepo: Airbnb's journey into microservices -
          GitHub Universe 2018
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=y5Z5a6QdA-M">
          RailsConf 2019 - Rethinking the View Layer with Components by Joel
          Hawksley
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=Nz-aU3vOFbw">
          RailsConf 2019 - The 30-Month Migration by Glenn Vanderburg
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/playlist?list=PL3m89j0mV0pdNAg6x9oq6S8Qz_4C-yuwj">
          On Writing Software Well
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=93MA0VUWP9w">
          Igor Istocniks - How WhatsApp moved 1.5B users across data centers |
          Code BEAM SF 19
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=UTKIT6STSVM">
          How Netflix Thinks of DevOps
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=pW-SOdj4Kkk">
          Jonathan Blow - Preventing the Collapse of Civilization (English only)
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=t46L9RKmlNo">
          John Mertens - Lessons From Our First Trillion Messages with Flow -
          ElixirConf EU 2019
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=P89N1YJBjpA">
          Matthew Nowack - ZenMonitor: Scaling Distributed Monitoring at Discord
          | Code BEAM SF 19
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=r7tFvmFDbZE">
          ElixirConf 2018 - Breaking Down the User Monolith - Zach Porter
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=Il9ZVemPj4A">
          ElixirConf 2018 - Simple is Beautiful Building an SLA Monitoring .. -
          Aish Dahal
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=AiJ8tRRH0f8">
          Kent C Dodds - Simply React
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=W7UkLNZva1o">
          Efficient data loading in Elixir using the deferrable pattern - build
          super fast GraphQL resolvers
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=HNiFiLVg20k">
          YOW! Lambda Jam 2018 - Yaron Minsky - Reactive Programming with Diff
          and Patch #YOWLambdaJam
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=oTcDmnAXZ4E">
          Immutable Application Architecture - Lee Byron (@leeb) at @ReactEurope
          2018
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=gFFDgjVQLt4">
          Livestream 12/28/2017 - Hooking up the new virtual machine
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=HctYHe-YjnE">
          RailsConf 2017: In Relentless Pursuit of REST by Derek Prior
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=-J8YyfrSwTk">Effective ML</a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=P7dTPoxCg4w">
          Patrick Stapfer: Making Unreasonable States Impossible - ReasonML
          Munich Meetup
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=8rRzESy0X2k">
          Production Rules on Databases - Paula Gearon
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=QJVdcIlqGwc">
          Patrick Stapfer - Manage side-effects efficiently with Redux Saga at
          react-europe 2016
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/watch?v=y_b6RTes83c">
          Saša Jurić - Discovering Processes (ElixirConfEU 2016)
        </a>
      </li>
    </ul>
    <h2>Podcasts</h2>
    <ul>
      <li>
        <a href="https://overcast.fm/itunes1288274408/the-embermap-podcast">
          The EmberMap Podcast
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes315114957/this-week-in-startups-audio">
          This Week in Startups - Audio
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1050462261/acquired">Acquired</a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1243627144/the-art-of-product">
          The Art of Product
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes341623264/the-changelog">
          The Changelog
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1039942918/elixir-fountain">
          Elixir Fountain
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1379029137/elixir-mix">Elixir Mix</a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1372617417/elixir-outlaws">
          Elixir Outlaws
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1298287048/elixir-talk">
          Elixir Talk
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes826420969/exponent">Exponent</a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1081584611/the-ezra-klein-show">
          The Ezra Klein Show
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes354668519/freakonomics-radio">
          Freakonomics Radio
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes931714873/full-stack-radio">
          Full Stack Radio
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1150510297/how-i-built-this-with-guy-raz">
          How I Built This with Guy Raz
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1320118593/the-indicator-from-planet-money">
          The Indicator from Planet Money
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1459893010/maintainable">
          Maintainable
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1365791129/mobycast">Mobycast</a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes290783428/planet-money">
          Planet Money
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1008577710/the-pitch">The Pitch</a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1333705038/reason-town">
          Reason Town
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1341969432/react-podcast">
          React Podcast
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1019576853/software-engineering-daily">
          Software Engineering Daily
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes366931951/startups-for-the-rest-of-us">
          Startups For the Rest of Us
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1236907421/y-combinator">
          Y Combinator
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1107185328/to-be-continuous">
          To Be Continuous
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1253186678/syntax-tasty-web-development-treats">
          Syntax - Tasty Web Development Treats
        </a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1267161825/swift-by-sundell">
          Swift by Sundell
        </a>
      </li>
    </ul>
  </Container>
);

export default KnowledgeBasePage;
