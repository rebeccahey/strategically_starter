// This is Footer component

import { Link } from "gatsby"
import React from "react"
import "../styles/footer.css"

const LinkStyle = {
  color: `white`,
  textDecoration: `none`,
  fontWeight: 400,
};

const Footer = () => (
  <footer className="common-width-style"> 
    <div id="footer-content"> 
      <div style={{ display: `inline-block`, }}>
        <Link to="/" style={LinkStyle}>
          © {new Date().getFullYear()} {` `} Strategically Digital Marketing ltd
        </Link>
      </div>
      <div style={{ display: `inline-block`, float: `right`, color: `white`,}}>
        <Link to="/" style={LinkStyle}>
          Privacy
        </Link>
        {' | '}
        <Link to="/" style={LinkStyle}>
          Terms
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer
