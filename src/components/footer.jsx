import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/free-brands-svg-icons";
import "font-awesome/css/font-awesome.min.css";

import "../../static/css/footer.css";

export class Footer extends Component {
  render() {
    const footer = (
      <footer id="footer-section">
        {/* <div id="scroll-to-top">
          <i class="fa fa-chevron-up"></i>
          <FontAwesomeIcon icon={faChevronUp} />
        </div> */}
        <div class="footer-section">
          {/* <!-- <div class="top-angle"></div> --> */}
          <div class="container">
            {/* <div class="row sm-show" style={{marginTop: '-50px', marginBottom: '50px'}}>
              <div class="col-sm-6 col-xs-12 footer-phone">
                <i class="fa fa-phone"></i>
                <FontAwesomeIcon icon={faPhone} />
                +33 6 12 34 56 78
              </div>
              <div class="col-sm-6 col-xs-12 footer-email">
                <i class="fa fa-envelope"></i>
                <FontAwesomeIcon icon={faEnvelope} />
                ilymun.csi.isl@gmail.com
              </div>
            </div> */}
            <div class="row">
              <div class="footer-social-btn col-md-4 col-sm-3">
                <a
                  target="_blank"
                  href="https://www.facebook.com/internationallyonmun"
                  class="facebook-btn"
                >
                  <i class="fa fa-facebook"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/_ilymun/"
                  class="instagram-btn"
                >
                  <i class="fa fa-instagram"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCFmcIYRifCNmHt9sjoWUDsA"
                  class="youtube-btn"
                >
                  <i class="fa fa-youtube-play"></i>
                </a>
              </div>
              <div class="copyrights col-md-8 col-sm-9">
                <span style={{ float: "right" }}>
                  &copy; <a href="/">ILYMUN</a> 2017, All Rights Reserved,
                  Developed by <a href="http://pablogamito.com">Pablo Gamito</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );

    return footer;
  }
}
