import React from "react"

import {Navbar} from '../components/navbar'
import {HomeAboutSection} from '../components/home/about'

/* CSS Files */
import '../../static/css/bootstrap.min.css';
import '../../static/css/application.css';
import '../../static/css/navbar.css';
import '../../static/css/loader.css';
import '../../static/css/landing/style.css';
import '../../static/css/landing/responsive.css';

import "../../static/css/revolution/settings.css";
import "../../static/css/revolution/layers.css";
import "../../static/css/revolution/navigation.css";

import "../../static/css/animate.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.loadedScripts = [];
  }

  loadScript(src) {
    const script = document.createElement("script");
    script.src = src; //+ '?cachebuster='+ new Date().getTime();
    script.async = false;
    this.loadedScripts.push(script);
    document.body.appendChild(script);
  }

  componentDidMount() {
    // TODO: Move this to just use imports
    // Makes sure that when a plainPage is mounted for the first time through 
    // a router it scrolls to the top.
    window.scrollTo(0, 0);

    this.loadScript("../../static/js/parallax.min.js");
    this.loadScript("../../static/js/landing/kinetic-v5.1.0.min.js");
    this.loadScript("../../static/js/landing/functions.js");
  }

  componentWillUnmount() {
    for (let script of this.loadedScripts) {
      document.body.removeChild(script);
    }

    this.loadedScripts = [];
  }

  render () {
    const home = 
      <div id="home">
        <Navbar landing/>
        
        <div id="content" class="site-content">
          {/* <LandingSlider /> */}
          <HomeAboutSection />
          {/* <LandingParallax />
          <LandingValues />
          <LandingTeam />
          <CountDownParallax />
          <LandingQuotes />
          <LandingPress />
          <LandingPartners />
          <Contact /> */}
          {/* <section id="map" style={{width: '100%', height: '500px'}}></section> */}
          {/* <Map /> */}
        </div>
        {/* <Footer /> */}
        {/* <ScriptTag type="text/javascript" src={require("./wp-content/themes/ilymun-wp-theme/js/owl.carousel.min.js")} /> */}
        {/* <ScriptTag type="text/javascript" src={require("./wp-content/themes/ilymun-wp-theme/js/parallax.min.js")} /> */}
        {/* <ScriptTag type="text/javascript" src={require("./wp-content/themes/ilymun-wp-theme/js/landing/kinetic-v5.1.0.min.js")} /> */}
        {/* <ScriptTag type="text/javascript" src={require("./wp-content/themes/ilymun-wp-theme/js/landing/functions.js")} /> */}
      </div>

    return home;
  }
}

export default HomePage
