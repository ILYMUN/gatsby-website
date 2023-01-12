import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import LazyLoad from "react-lazyload";
import ScrollAnimation from "react-animate-on-scroll";

export class LandingOurSponsors extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            content: markdownRemark(
              frontmatter: { section: { eq: "sponsors" }, page: { eq: "home" } }
            ) {
              frontmatter {
                title
                subtitle
                image1
                image2
              }
              
              html
            }
          }
        `}
        
        render={data => (
          <section id="team">
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
                  <div class="section-content">
                    <div class="row">
                      <div id="contenair-grid">
                        <div class="image_contenair col-md-4 col-sm-4">
                          <ScrollAnimation animateIn="bounceInUp" animateOnce>
                            <LazyLoad>
                              <img
                                src={require("../../../static/images/" + data.content.frontmatter.image1).default}
                              />
                            </LazyLoad>
                            <p>{data.content.frontmatter.name1}</p>
                          </ScrollAnimation>
                        </div>
                        <div class="image_contenair col-md-4 col-sm-4">
                          <ScrollAnimation animateIn="bounceInUp" animateOnce>
                            <LazyLoad>
                              <img
                                src={require("../../../static/images/" + data.content.frontmatter.image2).default}
                              />
                            </LazyLoad>
                            <p>{data.content.frontmatter.name2}</p>
                          </ScrollAnimation>
                        </div>
                      </div>
                    </div>
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
