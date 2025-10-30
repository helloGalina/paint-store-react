import { useState } from "react";
import headerBg from "../assets/header-bg1.jpg";
import phone from "../assets/phone.svg";
import logo from "../assets/logo.svg";
import "../styles/style.css";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#FFFFFF",
      }}
    >
      <div className="container">
        <div className="header__top">
          <nav className="menu">
            <button
              className={`menu__btn ${menuActive ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
            </button>

            <ul className={`menu__list ${menuActive ? "active" : ""}`}>
              <li>
                <a href="#intro">ABOUT</a>
              </li>
              <li>
                <a href="#catalog">PAINTS</a>
              </li>
              <li>
                <a href="#gallery">GALLERY</a>
              </li>
              <li>
                <a href="#contacts">CONTACTS</a>
              </li>
            </ul>
          </nav>

          <a href="#" className="logo">
            <img src={logo} alt="Логотип" />
          </a>

          <a href="tel:88001234567" className="header__phone">
            <img src={phone} alt="Телефон" />
            <span>8 800 123 45 67</span>
          </a>
        </div>

        <h1 className="header__title">Eco-Friendly Paints For A Healthy Home</h1>
        <p className="header__text">
          Purifies indoor spaces of airborne pollutants.
        </p>
        <a href="#" className="header__btn">
          Shop our colors
        </a>
      </div>
    </header>
  );
}
