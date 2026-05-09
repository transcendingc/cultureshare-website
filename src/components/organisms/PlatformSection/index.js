import React from "react";
import "./styles.css";

const features = [
  { icon: "📜", label: "Scrolls", desc: "Upload cultural heritage as Reels or Documentaries" },
  { icon: "🏛️", label: "Communities", desc: "Connect with your tribe and build culture groups" },
  { icon: "🏆", label: "Hall of Fame", desc: "Honor great Africans who shaped history" },
  { icon: "🔍", label: "Historians", desc: "Expert-validated and accredited heritage content" },
  { icon: "🪙", label: "Cowries", desc: "Earn from cultural content with platform currency" },
  { icon: "🌑", label: "Dark Zone", desc: "Algorithmically moderated cultural content protection" },
];

const PlatformSection = () => (
  <section className="platform-section" id="features">
    <div className="platform-inner">
      <div className="platform-copy">
        <span className="platform-kicker">PLATFORM OVERVIEW</span>
        <h2>
          Everything your culture needs to explore,{" "}
          <span>share, and preserve</span>
        </h2>
        <p>
          CultureShare brings together Scrolls, Communities, Historian verification,
          the Cowries economy, and the Hall of Fame into one connected cultural heritage experience.
        </p>
        <ul className="platform-checklist">
          <li>Share heritage as verified Reels or Documentaries</li>
          <li>Build community around tribes, traditions, and history</li>
          <li>Earn from cultural content with Cowries currency</li>
          <li>Keep African narratives authentic and protected</li>
        </ul>
        <a href="#hero" className="platform-cta">
          Join the Waitlist →
        </a>
      </div>
      <div className="platform-diagram">
        <div className="platform-hub">
          <div className="platform-hub__center">
            <span className="platform-hub__label">CultureShare</span>
            <span className="platform-hub__sub">Platform</span>
          </div>
          {features.map((f) => (
            <div key={f.label} className="platform-node">
              <span className="platform-node__icon">{f.icon}</span>
              <span className="platform-node__label">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PlatformSection;
