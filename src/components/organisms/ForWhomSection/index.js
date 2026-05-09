import React from "react";
import "./styles.css";
import historianImg from "../../../assets/images/modern-african-pattern-hall.jpg";
import raiderImg from "../../../assets/images/maasai-warrior-desert.jpg";
import communityImg from "../../../assets/images/community-storytelling-fire.jpg";

const personas = [
  {
    image: historianImg,
    icon: "🏛️",
    role: "Historians",
    headline: "The Keepers of Knowledge",
    description:
      "Elders, scholars, cultural custodians, and subject-matter experts who verify, document, and share authenticated heritage content. Earn Cowries and build your legacy archive.",
    traits: ["Verified Badge", "Content Monetisation", "Legacy Archive", "Historian Status"],
  },
  {
    image: raiderImg,
    icon: "⚔️",
    role: "Raiders",
    headline: "The Explorers of Culture",
    description:
      "Curious minds who travel through the platform discovering stories, subscribing to Historians, and collecting cultural knowledge from across the African continent and diaspora.",
    traits: ["Subscription Feed", "Cowries Rewards", "Dark Zone Access", "Tribe Discovery"],
  },
  {
    image: communityImg,
    icon: "🌍",
    role: "Communities",
    headline: "The Bonds That Unite Us",
    description:
      "Groups formed around shared language, tradition, tribe, or region. Collaborate, co-create, and curate cultural content as a collective — keeping your community's story alive.",
    traits: ["Group Creation", "Co-curated Scrolls", "Heritage Events", "Language Threads"],
  },
];

const ForWhomSection = () => (
  <section className="forwhom-section" id="community">
    <div className="forwhom-inner">
      <div className="forwhom-header">
        <span className="forwhom-kicker">Who It's For</span>
        <h2>
          Built for every African{" "}
          <span>voice and story</span>
        </h2>
        <p>
          Whether you're a custodian of culture, a curious explorer, or a
          community building its digital homeland — CultureShare is your platform.
        </p>
      </div>

      <div className="forwhom-grid">
        {personas.map((p) => (
          <div key={p.role} className="forwhom-card">
            <div className="forwhom-card__img-wrap">
              <img src={p.image} alt={p.role} />
              <div className="forwhom-card__img-overlay" />
              <span className="forwhom-card__icon">{p.icon}</span>
            </div>
            <div className="forwhom-card__body">
              <span className="forwhom-card__role">{p.role}</span>
              <h3>{p.headline}</h3>
              <p>{p.description}</p>
              <div className="forwhom-card__traits">
                {p.traits.map((t) => (
                  <span key={t} className="forwhom-trait">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ForWhomSection;
