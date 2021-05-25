import React from "react";
import { Helmet } from "react-helmet";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

import { HomeAboutSection } from "../components/home/about";
import { LandingHero } from "../components/home/hero";
import { LandingHero2 } from "../components/home/hero2";
import { LandingParallax } from "../components/home/parallax";
import { LandingValues } from "../components/home/values";
import { LandingTeam } from "../components/home/team";
import { CountDownParallax } from "../components/home/countdown";
// import {LandingQuotes} from '../components/home/quotes'
import { LandingPress } from "../components/home/press";
import { Contact } from "../components/home/contact";
import { Map } from "../components/home/map";

/* CSS Files */
import "../../static/css/bootstrap.min.css";
import "../../static/css/application.css";
import "../../static/css/navbar.css";
import "../../static/css/loader.css";
import "../../static/css/landing/style.css";
import "../../static/css/landing/responsive.css";

import "../../static/css/revolution/settings.css";
import "../../static/css/revolution/layers.css";
import "../../static/css/revolution/navigation.css";

import "../../static/css/animate.css";

/* JS Files */
// import "../../static/js/parallax.min.js";
// import "../../static/js/landing/kinetic-v5.1.0.min.js";
// import "../../static/js/landing/functions.js";

// import "../../static/js/landing/functions"

class HomePage extends React.Component {
  render() {
    const home = (
      <div id="home">
        <Helmet>
          <title>ILYMUN</title>
        </Helmet>

        <Navbar landing />

        <div id="content" class="site-content">
          <LandingHero />
          <HomeAboutSection />
          <LandingHero2 />
          <LandingParallax />
          <LandingValues />
          <LandingTeam />
          <CountDownParallax />
          {/* <LandingQuotes /> */}
          <LandingPress />
          {/* <LandingPartners />  */}
          <Contact />
          {/* <section id="map" style={{width: '100%', height: '500px'}}></section> */}
          <Map />
        </div>
        <Footer />
        {/* <ScriptTag type="text/javascript" src={require("./wp-content/themes/ilymun-wp-theme/js/owl.carousel.min.js")} /> */}
        {/* <ScriptTag type="text/javascript" src={require("./wp-content/themes/ilymun-wp-theme/js/parallax.min.js")} /> */}
        {/* <ScriptTag type="text/javascript" src={require("./wp-content/themes/ilymun-wp-theme/js/landing/kinetic-v5.1.0.min.js")} /> */}
        {/* <ScriptTag type="text/javascript" src={require("./wp-content/themes/ilymun-wp-theme/js/landing/functions.js")} /> */}
      </div>
    );

    return home;
  }
}

export default HomePage;
