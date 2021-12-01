import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import LazyLoad from "react-lazyload";
import ScrollAnimation from "react-animate-on-scroll";

export class LandingSponsors extends Component {
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
                image1
                image2
                image3
                image4
              }
              
              html
            }
          }
        `}
        
        render={data => (
          <section id="sponsors">
            <div>
              <div class="gray-bg angular section-padding">
                <div class="top-angle"></div>
                <div class="container">
                  <ScrollAnimation animateIn="slideInRight" animateOnce>
                    <div class="section-head">
                      <h2 class="section-title">
                        {data.content.frontmatter.title}
                      </h2>
                    </div>
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
