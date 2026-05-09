import React, { useState } from "react";
import "./styles.css";
import phone1 from "../../../assets/images/traditional-dancers-performance.jpg";
import phone2 from "../../../assets/images/african-women-celebration.jpg";
import phone3 from "../../../assets/images/african-spice-market.jpg";
import phone4 from "../../../assets/images/african-heritage-museum.jpg";

const features = [
  {
    icon: "📜",
    title: "Scrolls",
    tagline: "Heritage as Reels & Documentaries",
    description:
      "Upload your cultural knowledge as immersive short-form or long-form video content, tagged by tribe, language, and tradition.",
    image: phone1,
  },
  {
    icon: "🏘️",
    title: "Communities",
    tagline: "Connect with Your Tribe",
    description:
      "Find and build groups around shared heritage — your country, clan, language, or tradition.",
    image: phone2,
  },
  {
    icon: "🪙",
    title: "Cowries Economy",
    tagline: "Earn from Your Culture",
    description:
      "Monetize your cultural content through the Cowries currency system, tied directly to the Nigerian Naira.",
    image: phone3,
  },
  {
    icon: "🏛️",
    title: "Historian Verification",
    tagline: "Trusted, Validated Content",
    description:
      "Accredited historians and cultural experts verify heritage content to ensure authenticity and accuracy.",
    image: phone4,
  },
];

const FeatureSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="feature-section" id="solution">
      <div className="feature-inner">
        <div className="feature-header">
          <span className="feature-kicker">The Solution</span>
          <h2>
            Everything your culture needs,{" "}
            <span>in one platform</span>
          </h2>
          <p>
            A dedicated platform empowering Africans everywhere to share,
            preserve, and celebrate their roots on a global stage.
          </p>
        </div>

        <div className="feature-showcase">
          <div className="feature-tabs">
            {features.map((f, i) => (
              <button
                key={f.title}
                className={`feature-tab${active === i ? " feature-tab--active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="feature-tab__icon">{f.icon}</span>
                <div className="feature-tab__copy">
                  <strong>{f.title}</strong>
                  <span>{f.tagline}</span>
                  {active === i && <p>{f.description}</p>}
                </div>
                <span className="feature-tab__arrow">→</span>
              </button>
            ))}
          </div>

          <div className="feature-mockup">
            {features.map((f, i) => (
              <img
                key={f.title}
                src={f.image}
                alt={f.title}
                className={`feature-mockup__img${active === i ? " feature-mockup__img--active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
