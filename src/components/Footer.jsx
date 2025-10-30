import "../styles/style.css";
import logo from "../assets/logo2.svg";
import { FaPinterestP, FaVk, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__line"></div>

      <div className="container footer__inner">
        <div className="footer__logo">
          <img src={logo} alt="Paint Studio Logo" />
        </div>

        <nav className="footer__menu">
          <ul>
            <li><a href="#intro">About</a></li>
            <li><a href="#catalog">Paints</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </nav>

        <a href="tel:88001234567" className="footer__contact">
          <p>8 800 123 45 67</p>
        </a>

        <div className="footer__social">
          <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
          <a href="#" aria-label="VK"><FaVk /></a>
          <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
        </div>
      </div>

      <div className="footer__copy">
        2025 © Paint Studio. All rights reserved.
      </div>
    </footer>
  );
}
