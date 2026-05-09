import React from "react";
import WaitlistForm from "../../molecules/WaitlistForm";
import "./styles.css";
import mockup from "../../../assets/images/african-woman-map-portrait.jpg";

const chips = [
  "Scrolls", "Communities", "Hall of Fame", "Dark Zone",
  "Historians", "Cowries", "Profile Tunes", "Raiders",
];

const HeroSection = () => (
  <main className="hero-section" id="hero">
    <div className="hero-inner">
      <div className="hero-copy">
        <h1>
          Preserve Your Heritage.{" "}
          <span className="hero-accent">Write Your Story.</span>
        </h1>
        <p>
          The first social platform built to document, celebrate, and preserve
          African cultural heritage — by Africans, for the world.
        </p>
        <WaitlistForm />
        <div className="hero-chips">
          {chips.map((chip) => (
            <span key={chip} className="hero-chip">
              <span className="hero-chip__dot" />
              {chip}
            </span>
          ))}
        </div>
      </div>
      <div className="hero-mockup">
        <div className="hero-mockup__card">
          <img src={mockup} alt="CultureShare scroll feed" />
        </div>
      </div>
    </div>
  </main>
);

export default HeroSection;
