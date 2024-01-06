import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Masonry from "react-masonry-component";
import ScrollAnimation from "react-animate-on-scroll";

const masonryOptions = {
  transitionDuration: 0,
  itemSelector: ".masonryImage",
  columnWidth: ".masonryImage",
  percentPosition: true
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

export class LandingPress extends Component {
  render() {
    const childElements = [
      require("../../../static/images/home-photo-grid/grid_image1.JPG").default,
      require("../../../static/images/home-photo-grid/grid_image2.JPG").default,
      require("../../../static/images/home-photo-grid/grid_image3.JPG").default,
      require("../../../static/images/home-photo-grid/grid_image4.JPG").default,
      require("../../../static/images/home-photo-grid/grid_image5.JPG").default,
      require("../../../static/images/home-photo-grid/grid_image6.JPG").default,
      require("../../../static/images/home-photo-grid/grid_image7.JPG").default,
      require("../../../static/images/home-photo-grid/grid_image8.JPG").default,
      require("../../../static/images/home-photo-grid/grid_image9.JPG").default,
      require("../../../static/images/home-photo-grid/grid_image10.JPG").default,
      require("../../../static/images/home-photo-grid/grid_image11.JPG").default,
      require("../../../static/images/home-photo-grid/grid_image12.JPG").default
    ].map(function (src) {
      return (
        <div className="masonryImage col-md-3 col-sm-4 col-xs-6">
          <img src={src} alt=""/>
        </div>
      );
    });

    return (
      <StaticQuery
        query={graphql`
          {
            content: markdownRemark(
              frontmatter: { section: { eq: "contact" }, page: { eq: "home" } }
            ) {
              frontmatter {
                title
                subtitle
              }
              html
            }
          }
        `}
        render={data => (
          <section id="press">
            <div>
              <div class="gray-bg angular section-padding">
                <div class="top-angle"></div>
                <div class="container">
                  <ScrollAnimation animateIn="slideInRight" animateOnce>
                    <div class="section-head">
                      <h2 class="section-title">
                        {data.content.frontmatter.title}
                      </h2>
                      <p class="section-description">
                        {data.content.frontmatter.subtitle}
                      </p>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation animateIn="bounceInUp" animateOnce>
                    <div
                      class="col-md-12"
                      style={{
                        textAlign: "center",
                        marginTop: "-100px",
                        marginBottom: "30px"
                      }}
                    >
                      <h3>Latest Articles</h3>
                      <a href="/articles/">
                        <button class="button">Checkout Our Articles</button>
                      </a>
                    </div>
                  </ScrollAnimation>
                  <div
                    class="col-md-12"
                    style={{ textAlign: "center", marginBottom: "75px" }}
                  >
                    <ScrollAnimation animateIn="bounceInUp" animateOnce>
                      <h3>Photos</h3>

                      <Masonry
                        className={"masonry row"} // default ''
                        elementType={"div"} // default 'div'
                        options={masonryOptions} // default {}
                        disableImagesLoaded={false} // default false
                        updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                        imagesLoadedOptions={imagesLoadedOptions} // default {}
                      >
                        {childElements}
                      </Masonry>
                      <br />
                      <a href="https://www.facebook.com/pg/internationallyonmun/photos/">
                        <button
                          class="button"
                          onclick="location.href='/media/';"
                        >
                          Checkout more Photography
                        </button>
                      </a>
                    </ScrollAnimation>
                  </div>
                </div>
                <div class="bottom-angle"></div>
              </div>
            </div>
          </section>
        )}
      />
    );
  }
}
