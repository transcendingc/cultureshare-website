import React from "react";
import "./styles.css";

const stats = [
  {
    value: "1.4B+",
    label: "Africans globally",
    sub: "in diaspora and on the continent",
  },
  {
    value: "2,000+",
    label: "African languages",
    sub: "at risk of being lost forever",
  },
  {
    value: "54",
    label: "Countries in Africa",
    sub: "each with a rich, unique story",
  },
  {
    value: "0",
    label: "Dedicated platforms",
    sub: "for African cultural heritage — until now",
  },
];

const StatsSection = () => (
  <div className="stats-section">
    <div className="stats-inner">
      {stats.map((s) => (
        <div key={s.label} className="stats-item">
          <strong className="stats-value">{s.value}</strong>
          <span className="stats-label">{s.label}</span>
          <span className="stats-sub">{s.sub}</span>
        </div>
      ))}
    </div>
  </div>
);

export default StatsSection;
