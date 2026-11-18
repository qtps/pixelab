import { useState } from 'react';
import logo from '../../assets/Logo.svg';

const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="site-nav container">
      <a className="brand" href="#" aria-label="Pixelab home">
        <img src={logo} alt="Pixelab" />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-content ${menuOpen ? 'is-open' : ''}`}>
        <div className="nav-links">
          <a href="#work">Our work</a>
          <a href="#process">Process</a>
          <a href="#stories">Stories</a>
        </div>
        <a className="button button-dark nav-button" href="#contact">
          Start a project <span aria-hidden="true">↗</span>
        </a>
      </div>
    </nav>
  );
};

export default SiteHeader;
