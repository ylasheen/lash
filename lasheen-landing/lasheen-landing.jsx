import { useState, useEffect } from "react";
import { Sparkles, Download, Wand2, BookOpen, ArrowRight, Menu } from "lucide-react";

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Source+Serif+4:ital,wght@0,400;1,300;1,400&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --font-display: 'Poppins', sans-serif;
    --font-serif: 'Source Serif 4', serif;
  }

  body, html { width: 100%; height: 100%; overflow: hidden; }

  .lg-light {
    background: rgba(255,255,255,0.01);
    background-blend-mode: luminosity;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
    position: relative;
    overflow: hidden;
  }

  .lg-light::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1.4px;
    border-radius: inherit;
    background: linear-gradient(180deg,
      rgba(255,255,255,0.45) 0%,
      rgba(255,255,255,0.15) 20%,
      transparent 40%,
      transparent 60%,
      rgba(255,255,255,0.15) 80%,
      rgba(255,255,255,0.45) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .lg-strong {
    background: rgba(255,255,255,0.01);
    background-blend-mode: luminosity;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
    position: relative;
    overflow: hidden;
  }

  .lg-strong::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1.4px;
    border-radius: inherit;
    background: linear-gradient(180deg,
      rgba(255,255,255,0.5) 0%,
      rgba(255,255,255,0.2) 20%,
      transparent 40%,
      transparent 60%,
      rgba(255,255,255,0.2) 80%,
      rgba(255,255,255,0.5) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  .hero { 
    width: 100vw; height: 100vh; 
    display: flex; flex-direction: row;
    font-family: var(--font-display);
    position: relative;
  }

  video.bg {
    position: fixed;
    inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .overlay-tint {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.15);
    z-index: 1;
  }

  .left-panel {
    position: relative;
    z-index: 10;
    width: 52%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .left-inner {
    position: absolute;
    inset: 1.5rem;
    border-radius: 1.5rem;
  }

  .left-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .logo-icon {
    width: 32px; height: 32px;
    background: rgba(255,255,255,0.2);
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
  }

  .logo-text {
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.05em;
    color: white;
  }

  .menu-btn {
    display: flex; align-items: center; gap: 0.5rem;
    padding: 0.4rem 1rem;
    border-radius: 9999px;
    font-size: 0.8rem;
    color: white;
    cursor: pointer;
    font-family: var(--font-display);
    transition: transform 0.2s;
  }

  .menu-btn:hover { transform: scale(1.05); }

  .hero-center {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
  }

  .big-logo {
    width: 70px; height: 70px;
    background: rgba(255,255,255,0.15);
    border-radius: 16px;
    display: flex; align-items: center; justify-content: center;
  }

  h1 {
    font-family: var(--font-display);
    font-size: clamp(2.8rem, 5vw, 4rem);
    font-weight: 500;
    line-height: 1.1;
    letter-spacing: -0.05em;
    color: white;
  }

  h1 em {
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 300;
    color: rgba(255,255,255,0.8);
  }

  .cta-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.6rem 1.4rem 0.6rem 0.6rem;
    border-radius: 9999px;
    color: white;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    font-family: var(--font-display);
    transition: transform 0.2s;
  }

  .cta-btn:hover { transform: scale(1.05); }
  .cta-btn:active { transform: scale(0.95); }

  .cta-icon-wrap {
    width: 1.75rem; height: 1.75rem;
    border-radius: 9999px;
    background: rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
  }

  .pills {
    display: flex; gap: 0.5rem; flex-wrap: wrap;
  }

  .pill {
    padding: 0.35rem 1rem;
    border-radius: 9999px;
    font-size: 0.7rem;
    color: rgba(255,255,255,0.8);
    cursor: default;
  }

  .bottom-quote {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 1.25rem;
  }

  .quote-label {
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    margin-bottom: 0.5rem;
  }

  .quote-text {
    font-family: var(--font-display);
    font-size: 0.95rem;
    color: rgba(255,255,255,0.85);
    margin-bottom: 0.6rem;
  }

  .quote-text span.serif {
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 300;
  }

  .quote-author {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.65rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
  }

  .author-line {
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.2);
    max-width: 60px;
  }

  /* RIGHT PANEL */
  .right-panel {
    position: relative;
    z-index: 10;
    width: 48%;
    height: 100vh;
    display: none;
    flex-direction: column;
    padding: 1.5rem 1.5rem 1.5rem 0.5rem;
  }

  @media (min-width: 1024px) {
    .right-panel { display: flex; }
  }

  .right-top {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.75rem;
  }

  .social-pill {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.75rem;
    border-radius: 9999px;
  }

  .icon-circle {
    width: 2rem; height: 2rem;
    border-radius: 9999px;
    background: rgba(255,255,255,0.1);
    display: flex; align-items: center; justify-content: center;
    color: white;
    cursor: pointer;
    transition: color 0.2s;
  }

  .icon-circle:hover { color: rgba(255,255,255,0.7); }

  .account-btn {
    display: flex; align-items: center; gap: 0.5rem;
    padding: 0.4rem 0.9rem;
    border-radius: 9999px;
    color: white;
    font-size: 0.75rem;
    cursor: pointer;
    font-family: var(--font-display);
    transition: transform 0.2s;
  }

  .account-btn:hover { transform: scale(1.05); }

  .community-card {
    margin-top: 1rem;
    align-self: flex-end;
    width: 14rem;
    padding: 1rem 1.1rem;
    border-radius: 1.25rem;
  }

  .community-title {
    font-size: 0.8rem;
    font-weight: 500;
    color: white;
    margin-bottom: 0.25rem;
  }

  .community-desc {
    font-size: 0.68rem;
    color: rgba(255,255,255,0.6);
    line-height: 1.5;
  }

  .right-bottom {
    margin-top: auto;
  }

  .features-outer {
    padding: 1.25rem;
    border-radius: 2.5rem;
  }

  .feature-cards-row {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .feature-card {
    flex: 1;
    padding: 1.1rem;
    border-radius: 1.5rem;
  }

  .feature-icon {
    width: 2rem; height: 2rem;
    border-radius: 0.5rem;
    background: rgba(255,255,255,0.1);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 0.75rem;
  }

  .feature-title {
    font-size: 0.78rem;
    font-weight: 500;
    color: white;
    margin-bottom: 0.2rem;
  }

  .feature-desc {
    font-size: 0.65rem;
    color: rgba(255,255,255,0.55);
    line-height: 1.5;
  }

  .bottom-feature-card {
    padding: 0.9rem 1rem;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.9rem;
  }

  .flower-thumb {
    width: 6rem; height: 4rem;
    border-radius: 0.75rem;
    object-fit: cover;
    background: rgba(255,255,255,0.08);
    flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden;
  }

  .bottom-card-content { flex: 1; }

  .bottom-card-title {
    font-size: 0.78rem;
    font-weight: 500;
    color: white;
    margin-bottom: 0.2rem;
  }

  .bottom-card-desc {
    font-size: 0.65rem;
    color: rgba(255,255,255,0.55);
    line-height: 1.5;
  }

  .plus-btn {
    width: 2rem; height: 2rem;
    border-radius: 9999px;
    background: rgba(255,255,255,0.12);
    display: flex; align-items: center; justify-content: center;
    color: white;
    cursor: pointer;
    font-size: 1.1rem;
    flex-shrink: 0;
    transition: transform 0.2s;
  }

  .plus-btn:hover { transform: scale(1.1); }
`;

export default function LasheenLanding() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{styles}</style>

      <video
        className="bg"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="overlay-tint" />

      <div className="hero">
        {/* LEFT PANEL */}
        <div className="left-panel">
          <div className="left-inner lg-strong" style={{ borderRadius: "1.5rem" }} />
          <div className="left-content">
            {/* Nav */}
            <nav className="nav">
              <div className="nav-logo">
                <div className="logo-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10"/>
                    <path d="M12 2c2.5 2.5 4 6 4 10"/>
                    <path d="M8 7c1 3 1 7 4 9"/>
                  </svg>
                </div>
                <span className="logo-text">lasheen</span>
              </div>
              <button className="menu-btn lg-light" style={{ borderRadius: "9999px" }}>
                <Menu size={14} color="white" />
                <span style={{ fontSize: "0.75rem" }}>Menu</span>
              </button>
            </nav>

            {/* Hero Center */}
            <div className="hero-center">
              <div className="big-logo">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2">
                  <path d="M12 2C8 2 4 5 4 9c0 5 8 13 8 13s8-8 8-13c0-4-3.5-7-8-7z"/>
                  <path d="M12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="rgba(255,255,255,0.4)" stroke="none"/>
                  <path d="M7 9c0 3 2.5 6 5 8" strokeOpacity="0.5"/>
                </svg>
              </div>

              <h1>
                Innovating the<br />
                <em>spirit of bloom</em><br />
                AI
              </h1>

              <button className="cta-btn lg-strong" style={{ borderRadius: "9999px" }}>
                <div className="cta-icon-wrap">
                  <Download size={14} color="white" />
                </div>
                Explore Now
              </button>

              <div className="pills">
                {["Artistic Gallery", "AI Generation", "3D Structures"].map(p => (
                  <div key={p} className="pill lg-light" style={{ borderRadius: "9999px" }}>{p}</div>
                ))}
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="bottom-quote">
              <p className="quote-label">Visionary Design</p>
              <p className="quote-text">
                We imagined a realm with{" "}
                <span className="serif">no ending.</span>
              </p>
              <div className="quote-author">
                <div className="author-line" />
                Marcus Aurelio
                <div className="author-line" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          {/* Top bar */}
          <div className="right-top">
            <div className="social-pill lg-light" style={{ borderRadius: "9999px" }}>
              <a className="icon-circle" href="#" style={{ textDecoration: "none" }}><TwitterIcon /></a>
              <a className="icon-circle" href="#" style={{ textDecoration: "none" }}><LinkedinIcon /></a>
              <a className="icon-circle" href="#" style={{ textDecoration: "none" }}><InstagramIcon /></a>
              <div className="icon-circle">
                <ArrowRight size={14} />
              </div>
            </div>
            <button className="account-btn lg-light" style={{ borderRadius: "9999px" }}>
              <Sparkles size={14} color="white" />
              Account
            </button>
          </div>

          {/* Community card */}
          <div className="community-card lg-light">
            <p className="community-title">Enter our ecosystem</p>
            <p className="community-desc">
              Join a growing community of floral designers and AI creators shaping the future of bloom.
            </p>
          </div>

          {/* Bottom features */}
          <div className="right-bottom">
            <div className="features-outer lg-light">
              <div className="feature-cards-row">
                {/* Processing card */}
                <div className="feature-card lg-strong" style={{ borderRadius: "1.5rem" }}>
                  <div className="feature-icon">
                    <Wand2 size={16} color="white" />
                  </div>
                  <p className="feature-title">Processing</p>
                  <p className="feature-desc">Real-time AI floral rendering pipeline</p>
                </div>
                {/* Growth Archive card */}
                <div className="feature-card lg-strong" style={{ borderRadius: "1.5rem" }}>
                  <div className="feature-icon">
                    <BookOpen size={16} color="white" />
                  </div>
                  <p className="feature-title">Growth Archive</p>
                  <p className="feature-desc">Curated library of botanical patterns</p>
                </div>
              </div>

              {/* Bottom wide card */}
              <div className="bottom-feature-card lg-strong" style={{ borderRadius: "1.5rem" }}>
                <div className="flower-thumb">
                  <svg width="60" height="50" viewBox="0 0 60 50" fill="none">
                    <ellipse cx="30" cy="40" rx="12" ry="6" fill="rgba(255,255,255,0.08)"/>
                    <circle cx="30" cy="22" r="5" fill="rgba(255,255,255,0.25)"/>
                    {[0,60,120,180,240,300].map((a,i) => (
                      <ellipse
                        key={i}
                        cx={30 + 9*Math.cos(a*Math.PI/180)}
                        cy={22 + 9*Math.sin(a*Math.PI/180)}
                        rx="5" ry="3"
                        transform={`rotate(${a} ${30 + 9*Math.cos(a*Math.PI/180)} ${22 + 9*Math.sin(a*Math.PI/180)})`}
                        fill={`rgba(255,255,255,${0.12 + i*0.03})`}
                      />
                    ))}
                    <line x1="30" y1="27" x2="30" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className="bottom-card-content">
                  <p className="bottom-card-title">Advanced Plant Sculpting</p>
                  <p className="bottom-card-desc">Shape and evolve botanical forms with generative AI precision</p>
                </div>
                <button className="plus-btn">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
