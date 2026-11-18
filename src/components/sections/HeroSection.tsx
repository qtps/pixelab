// import heroImage from '../../assets/hero.png';
// import bulbIcon from '../../assets/bulb.svg';
import SiteHeader from '../layout/SiteHeader';

const HeroSection = () => (
  <section className="hero-section">
    <SiteHeader />

    {/* <div className="hero-content container">
      <div className="hero-copy">
        <p className="eyebrow">Digital products, made human</p>
        <h1>Make your next big idea <em>impossible to ignore.</em></h1>
        <p className="hero-description">
          We help ambitious teams build meaningful brands and digital
          experiences that people remember.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#contact">
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#work">
            Explore our work <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-sun" />
        <div className="hero-outline" />
        <img src={heroImage} alt="Creative professional using a smartphone" />
        <div className="floating-note note-top">
          <img src={bulbIcon} alt="" />
          <span>Fresh<br />ideas</span>
        </div>
        <div className="floating-note note-bottom">
          <strong>04</strong>
          <span>years of<br />creating</span>
        </div>
      </div>
    </div> */}

    {/* <div className="scroll-hint container">
      <span className="scroll-line" />
      Scroll to explore
    </div> */}
  </section>
);

export default HeroSection;
