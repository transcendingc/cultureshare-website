import React from "react";
import "./styles.css";

import footerBg from "../../../assets/images/west-african-city-street.jpg";
const linkedInLogo = "https://res.cloudinary.com/dojx1kdh2/image/upload/v1777069143/linkedin_axvdlx.svg";
const facebookLogo = "https://res.cloudinary.com/dojx1kdh2/image/upload/v1777069143/facebook_efeij7.svg";
const instagramLogo = "https://res.cloudinary.com/dojx1kdh2/image/upload/v1777069143/instagram_egsfm4.svg";

const xLogo = "https://res.cloudinary.com/dojx1kdh2/image/upload/v1777081959/twitter_duo550.png";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/cultureshare.co/",
    logo: instagramLogo,
    iconOnly: true,
  },
  {
    label: "Facebook",
    href: "#",
    logo: facebookLogo,
    iconOnly: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/culture-share-127606409/",
    logo: linkedInLogo,
    iconOnly: true,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/cultureshareco",
    logo: xLogo,
    iconOnly: true,
  },
];

const SocialIcon = ({ children }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    {children}
  </svg>
);

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section" id="contact">
      <div
        className="footer-backdrop"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(6, 20, 10, 0.86), rgba(5, 16, 8, 0.88)), url(${footerBg})`,
        }}
      />
      <div className="footer-content">
        <div className="footer-top">
          <div>
            <div className="brand footer-brand">
              Culture<span>Share</span>
            </div>
            <p className="footer-tagline">
              "Africa's story, told by Africans — preserved for generations to come."
            </p>
          </div>
          <a className="footer-cta" href="#hero">
            Join Waitlist
          </a>
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#problem">The Problem</a>
          <a href="#solution">The Solution</a>
          <a href="#works">How it Works</a>
          <a href="#contact">Contact us</a>
        </div>

        {/* <div className="footer-form-wrap">
          <WaitlistForm compact />
        </div> */}

        <div className="footer-socials" aria-label="Social media links">
          {socialLinks.map((link) =>
            link.iconOnly ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
                className="footer-social--icon-only"
              >
                <img src={link.logo} alt={link.label} width="28" height="28" />
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                <SocialIcon>{link.icon}</SocialIcon>
                <span>{link.label}</span>
              </a>
            )
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© CultureShare. All rights reserved. {currentYear}</p>
          <div className="footer-meta">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
