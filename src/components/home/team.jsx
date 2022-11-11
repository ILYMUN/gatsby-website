import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import LazyLoad from "react-lazyload";
import ScrollAnimation from "react-animate-on-scroll";

export class LandingTeam extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            content: markdownRemark(
              frontmatter: { section: { eq: "team" }, page: { eq: "home" } }
            ) {
              frontmatter {
                title
                subtitle
                image1
                name1
                image2
                name2
                image3
                name3
                image4
                name4
                image5
                name5
                image6
                name6
                image7
                name7
                #portrait{
                #  {
                #    image
                #    name
                #  }
                #}
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
                                src={require("../../../static/images/team/" + data.content.frontmatter.image1)}
                              />
                            </LazyLoad>
                            <p>{data.content.frontmatter.name1}</p>
                          </ScrollAnimation>
                        </div>
                        <div class="image_contenair col-md-4 col-sm-4">
                          <ScrollAnimation animateIn="bounceInUp" animateOnce>
                            <LazyLoad>
                              <img
                                src={require("../../../static/images/team/" + data.content.frontmatter.image2)}
                              />
                            </LazyLoad>
                            <p>{data.content.frontmatter.name2}</p>
                          </ScrollAnimation>
                        </div>

                            
                        <div class="image_contenair col-md-4 col-sm-4">
                          <ScrollAnimation animateIn="bounceInUp" animateOnce>
                            <LazyLoad>
                              <img
                                src={require("../../../static/images/team/" + data.content.frontmatter.image3)}
                              />
                            </LazyLoad>
                            <p>{data.content.frontmatter.name3}</p>
                          </ScrollAnimation>
                        </div>
                        <div class="image_contenair col-md-4 col-sm-4">
                          <ScrollAnimation animateIn="bounceInUp" animateOnce>
                            <LazyLoad>
                              <img
                                src={require("../../../static/images/team/" + data.content.frontmatter.image4)}
                              />
                            </LazyLoad>
                            <p>{data.content.frontmatter.name4}</p>
                          </ScrollAnimation>
                        </div>
                        <div class="image_contenair col-md-4 col-sm-4">
                          <ScrollAnimation animateIn="bounceInUp" animateOnce>
                            <LazyLoad>
                              <img
                                src={require("../../../static/images/team/" + data.content.frontmatter.image5)}
                              />
                            </LazyLoad>
                            <p>{data.content.frontmatter.name5}</p>
                          </ScrollAnimation>
                        </div>


                        <div class="image_contenair col-md-4 col-sm-4">
                          <ScrollAnimation animateIn="bounceInUp" animateOnce>
                            <LazyLoad>
                              <img
                                src={require("../../../static/images/team/" + data.content.frontmatter.image6)}
                              />
                            </LazyLoad>
                            <p>{data.content.frontmatter.name6}</p>
                          </ScrollAnimation>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <ScrollAnimation animateIn="bounceInUp" animateOnce>
                        <form action="/team/">
                          <button
                            type="submit"
                            class="button"
                            style={{ display: "block", margin: "0 auto" }}
                          >
                            See the Entire Team
                          </button>
                        </form>
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
