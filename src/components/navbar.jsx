import React, { Component } from "react";
import $ from "jquery";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/free-brands-svg-icons";
import "font-awesome/css/font-awesome.min.css";

import "../../static/styles/index.css";
import "../../static/styles/navbar.css";
// import './wp-content/themes/ilymun-wp-theme/js/jquery.bootstrap-autohidingnavbar.min.js';

export class Navbar extends Component {
  resize = () => this.forceUpdate();

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    window.addEventListener("scroll", this.handleScroll);

    // Navbar change on scroll
    $(document).on("scroll", () => this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    if (this.props.landing) {
      // $('.navbar').css('background-color', 'rgba(255,255,255,'+($(document).scrollTop() / 500) +')');
      let scrollPosition = $(document).scrollTop();
      if (scrollPosition >= $(".upper-navbar").height()) {
        $(".navbar").removeClass("navbar-static-top");
        $(".navbar").addClass("navbar-fixed-top");
        $(".navbar").addClass("navbar-sm");
        if ($(window).width() < 992) {
          // http://www.virtuosoft.eu/code/bootstrap-autohidingnavbar/
          // $(".navbar").autoHidingNavbar();
        }
      } else {
        $(".navbar").removeClass("navbar-fixed-top");
        $(".navbar").addClass("navbar-static-top");
        $(".navbar").removeClass("navbar-sm");
      }
    }
  }

  render() {
    const upperNavBar = (
      <div class="container upper-navbar">
        <div class="row">
          <div class="col-md-3">
            <p>
              <i class="fa fa-envelope"></i>{" "}
              <a href="mailto:support@ilymun.org">support@ilymun.org</a>
            </p>
          </div>
          <div class="col-md-2">
            <p>
              <i class="fa fa-phone"></i>{" "}
              <a href="tel:+33478696006">+33 4 78 69 60 06</a>
            </p>
          </div>
          <div class="col-md-3">
            <p>
              <a
                class="fa fa-facebook link"
                href="https://www.facebook.com/internationallyonmun"
                target="_blank"
              ></a>
              <a
                class="fa fa-instagram link"
                href="https://www.instagram.com/_ilymun/"
                target="_blank"
              ></a>
              <a
                class="fa fa-medium link"
                href="https://medium.com/@ilymun"
                target="_blank"
              ></a>
              <a
                class="fa fa-youtube-play link"
                href="https://www.youtube.com/channel/UCFmcIYRifCNmHt9sjoWUDsA"
                target="_blank"
              ></a>
            </p>
          </div>
          <div class="col-md-4">
            <p>
              <i class="fa fa-calendar"></i> Next Event in:{timeLeft}
              <span id="top-time"></span>
            </p>
          </div>
        </div>
      </div>
    );

    const navBar = (
      <nav
        className={
          "navbar " +
          (this.props.landing
            ? "navbar-static-top"
            : "navbar-fixed-top navbar-sm")
        }
      >
        <div class="container">
          <div class="navbar-header">
            <span class="tablet-navbar">
              {/*<!-- Something that appears only on tablets: next event? -->*/}
            </span>
            <button
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
            >
              <i class="fa fa-bars"></i>
            </button>
            {/* <!-- TODO: Make Logo Pop-out on hover to let people know it is clickable --> */}
            <a href="/">
              <a class="navbar-brand" href="/">
                <img src={require("../../static/images/logo.png").default} alt="" />
              </a>
            </a>
          </div>

          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              {/* <!-- <li class="active"><a href="#">Home</a></li> --> */}
              <li class="dropdown">
                <a
                  class="dropdown-toggle"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="/about">The Conference</a>
                  </li>
                  <li>
                    <a href="/committees/">Committees & Issues Debated</a>
                  </li>
                  <li>
                    <a href="/action-assembly/">Action Assembly</a>
                  </li>
                  <li>
                    <a href="/international-court-of-justice/">
                      International Court of Justice
                    </a>
                  </li>
                  <li>
                    <a href="/sponsors">
                      Our Sponsors
                    </a>
                  </li>
                  {/* <!--<li><a href="/program">Programme</a></li>--> */}
                  {/* <li><a class="scroll" href="/#team">Team</a></li> */}
                </ul>
              </li>
              <li class="dropdown">
                <a
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Get Ready <span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  {/* <!--<li><a href="/country-fact-sheets">Country Fact Sheets</a></li>--> */}
                  <li>
                    <a href="/debate-help/">How to Act & Debate</a>
                  </li>
                  <li>
                    <a href="/dress/">How to Dress</a>
                  </li>
                  {/* <!--<li><a href="/social-events">Social Events</a></li>--> */}
                </ul>
              </li>
              <li class="dropdown">
                <a
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Press<span class="caret"></span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href="/articles/">Articles</a>
                  </li>
                  <li>
                    <a href="/gallery/">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCFmcIYRifCNmHt9sjoWUDsA">
                      Videos
                    </a>
                  </li>
                  {/* <li><a href="/school-photos/">School Photos</a></li> */}
                </ul>
              </li>
              {/* <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Partners<span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><Link href="/partners/">Partners</a></li>
                  <li><Link href="/other-muns/">Other MUNs</a></li>
                </ul>
              </li> */}
              <li>
                <a href="/poster-gallery/">Poster Gallery</a>
              </li>
              <li>
                <a href="/other-muns/">Other MUNs</a>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              {/* <li><Link to Con><a class="scroll" href="/#contact-us">Contact Us</a></a></li> */}
              <li>
                <a href="/fund">Help Fund</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );

    return (
      <div>
        {this.props.landing ? upperNavBar : ""}
        {navBar}
      </div>
    );
  }
}

Navbar.defaultProps = {
  landing: false
};
