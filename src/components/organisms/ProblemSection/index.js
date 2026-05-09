import React from "react";
import "./styles.css";

const problems = [
  {
    number: "01",
    title: "African heritage is vanishing silently",
    description:
      "Globalization is erasing languages, traditions, and cultural knowledge passed down for centuries.",
  },
  {
    number: "02",
    title: "There's nowhere to own your cultural story",
    description:
      "No dedicated space exists for Africans to create, own, and share verified cultural heritage content.",
  },
  {
    number: "03",
    title: "African stories are being told by outsiders",
    description:
      "The global narrative around African culture is shaped by others, leaving authentic voices unheard.",
  },
  {
    number: "04",
    title: "Cultural institutions can't reach global audiences",
    description:
      "Heritage organizations across Africa lack the digital tools to promote and distribute content worldwide.",
  },
];

const ProblemSection = () => (
  <section className="problem-section" id="problem">
    <div className="problem-shell">
      <div className="problem-header">
        <span className="problem-kicker">The Problem</span>
        <h2>
          African heritage deserves{" "}
          <span>a home online</span>
        </h2>
        <p>
          The continent's stories — its languages, rituals, and histories — are
          fading. There is no platform built to stop it.
        </p>
      </div>

      <div className="problem-grid">
        {problems.map((problem) => (
          <article className="problem-card" key={problem.number}>
            <span className="problem-card__number">{problem.number}</span>
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
