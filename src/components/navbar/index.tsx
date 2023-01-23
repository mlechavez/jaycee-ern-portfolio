import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar" data-aos="fade-down">
        <div className="container collapsible">
          <Link to="/" className="navbar__brand">
            <img src={Logo} alt="Logo" />
          </Link>
          <span
            className="fa fa-bars navbar__toggler collapsible__toggler"
            aria-hidden="true"
          ></span>
          <div className="navbar__menu collapsible__content">
            <ul className="navbar__menu-list">
              <li className="navbar__menu-item">
                <Link className="text-gray-100" to="/about">
                  About Me
                </Link>
              </li>
              <li className="navbar__menu-item">
                <Link className="text-gray-100" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar__menu-list">
              <li className="navbar__menu-item">
                <a
                  className="text-primary"
                  href="mailto:jaycee.ern@blacksmith.com"
                >
                  jaycee.ern@blacksmith.com
                </a>
              </li>
              <li className="navbar__menu-item">
                <span className="text-gray-100">(+1) 123 456 7890</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
