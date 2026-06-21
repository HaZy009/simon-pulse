import '../styles/header.css';

import logo from '../assets/images/SimonPulseLogoDark.svg';

function Header() {
  return (
    <header className="app-header">

      <img
        src={logo}
        alt="SimonPulse logo"
        className="header-logo"
      />

      <h1 className="header-title">
        Simon<span>Pulse</span>
      </h1>

    </header>
  );
}

export default Header;