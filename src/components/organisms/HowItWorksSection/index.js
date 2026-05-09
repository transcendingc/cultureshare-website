import React from "react";
import "./styles.css";
import img1 from "../../../assets/images/african-women-three-map.jpg";
import img2 from "../../../assets/images/hands-holding-africa.jpg";
import img3 from "../../../assets/images/traditional-artifacts-stall.jpg";
import img4 from "../../../assets/images/maasai-valley-overlook.jpg";

const steps = [
  {
    number: "01",
    title: "Set Your Roots",
    description:
      "Sign up and tell us your heritage — your country, tribe, and origins. Build your cultural profile and connect with your ancestry.",
    image: img1,
  },
  {
    number: "02",
    title: "Get Verified",
    description:
      "Complete identity verification to establish your authentic African identity, unlocking Historian status and content credibility.",
    image: img2,
    flip: true,
  },
  {
    number: "03",
    title: "Upload Your First Scroll",
    description:
      "Share cultural heritage content as a Reel or Documentary. Tag it by tribe, language, and tradition for the world to discover.",
    image: img3,
  },
  {
    number: "04",
    title: "Raid & Discover",
    description:
      "Subscribe to Historians and explore the global African diaspora community. Earn Cowries by contributing authentic heritage content.",
    image: img4,
    flip: true,
  },
];

const HowItWorksSection = () => (
  <section className="section section--how" id="works">
    <div className="how-header">
      <span className="how-kicker">How it Works</span>
      <h2>
        Join <span>CultureShare</span> in minutes
      </h2>
    </div>

    <div className="steps-timeline">
      {steps.map((step) => (
        <div
          key={step.number}
          className={`timeline-step${step.flip ? " timeline-step--flip" : ""}`}
        >
          <div className="timeline-step__text">
            <span className="timeline-step__num">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
          <div className="timeline-step__visual">
            <img src={step.image} alt={step.title} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorksSection;
