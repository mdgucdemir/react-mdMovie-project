import React from "react";
import "./footer.scss";
import logo from "../../assets/tmovie.png";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const Footer = () => {
  const currentYear = dayjs().format("YYYY");
  return (
    <div className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-content-logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">mdMovies</Link>
          </div>
        </div>
        <div className="copy-right">
          <p className="description">
            &copy; Copyright {currentYear} Mehmet Deniz Gucdemir
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
