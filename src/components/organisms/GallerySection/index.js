import React from "react";
import "./styles.css";
import img1 from "../../../assets/images/africa-cultural-dance-map.jpg";
import img2 from "../../../assets/images/couple-at-african-market.jpg";
import img3 from "../../../assets/images/colorful-fruit-market.jpg";
import img4 from "../../../assets/images/traditional-dance-couple.jpg";
import img5 from "../../../assets/images/youth-acrobatics-sky.jpg";
import img6 from "../../../assets/images/women-braiding-waterfront.jpg";
import img7 from "../../../assets/images/dinka-man-cattle.jpg";
import img8 from "../../../assets/images/tuareg-man-desert-fire.jpg";
import img9 from "../../../assets/images/african-children-laughing.jpg";
import img10 from "../../../assets/images/nairobi-skyline.jpg";
import img11 from "../../../assets/images/women-ankara-fashion.jpg";
import img12 from "../../../assets/images/market-women-laughing.jpg";

const tiles = [
  { src: img1, alt: "Africa cultural dance map collage", span: "wide" },
  { src: img2, alt: "Couple at African market" },
  { src: img3, alt: "Colorful African fruit market" },
  { src: img4, alt: "Traditional dance couple" },
  { src: img5, alt: "Youth acrobatics", span: "tall" },
  { src: img6, alt: "Women braiding hair by water" },
  { src: img7, alt: "Dinka man with cattle" },
  { src: img8, alt: "Tuareg man at desert campfire" },
  { src: img9, alt: "African children laughing" },
  { src: img10, alt: "Nairobi skyline", span: "wide" },
  { src: img11, alt: "Women in Ankara fashion" },
  { src: img12, alt: "Market women laughing" },
];

const GallerySection = () => (
  <section className="gallery-section" id="gallery">
    <div className="gallery-inner">
      <div className="gallery-header">
        <span className="gallery-kicker">Living Heritage</span>
        <h2>
          A billion stories,{" "}
          <span>waiting to be shared</span>
        </h2>
        <p>
          From the Maasai savannas to the markets of Lagos, from Nairobi
          skylines to desert campfires — every corner of Africa holds a story
          that deserves to be told.
        </p>
      </div>
      <div className="gallery-mosaic">
        {tiles.map((tile, i) => (
          <div
            key={i}
            className={`gallery-tile${tile.span ? ` gallery-tile--${tile.span}` : ""}`}
          >
            <img src={tile.src} alt={tile.alt} loading="lazy" />
            <div className="gallery-tile__overlay" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
