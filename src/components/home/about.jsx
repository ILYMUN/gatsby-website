import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import LazyLoad from "react-lazyload";
import ScrollAnimation from "react-animate-on-scroll";

export class HomeAboutSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            content: markdownRemark(
              frontmatter: { section: { eq: "about" }, page: { eq: "home" } }
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
          <section id="about">
            <div>
              <div class="white-bg angular section-padding">
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
                      <ScrollAnimation animateIn="bounceInUp" animateOnce>
                        <div class="media-content col-md-5 col-sm-5">
                          <div class="double-frame">
                            <LazyLoad>
                              <img
                                src={require("../../../static/images/new_about.jpg").default}
                                alt=""
                              />
                            </LazyLoad>
                          </div>
                        </div>
                      </ScrollAnimation>
                      <ScrollAnimation animateIn="bounceInUp" animateOnce>
                        <div class="content-box col-md-7 col-sm-7">
                          <div class="hex content-icon-hex pull-left">
                            <div class="content-icon">
                              <span aria-hidden="true" class="li_bulb"></span>
                            </div>
                          </div>
                          <h2 class="lg-title text-center">
                            <span>This Year's Theme</span>
                          </h2>
                          <div class="content">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: data.content.html
                              }}
                            />
                            <form action="/about/">
                              <button type="submit" class="button">
                                Learn More
                              </button>
                            </form>
                          </div>
                        </div>
                      </ScrollAnimation>
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
