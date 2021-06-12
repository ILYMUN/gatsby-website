import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";

// Images
import hero from "../../../static/images/index-mini-ilymun-back-ground.jpg";

export class LandingHero2 extends Component {
  constructor(props) {
    super(props);
    this.nextSlideHandler = null; // React.useRef()
    this.previousSlideHandler = null; // React.useRef()
  }

  render() {
    return (<StaticQuery
      query={graphql`
      {
        content: markdownRemark(
          frontmatter: { section: { eq: "hero2" }, page: { eq: "home" } }
        ) {
          frontmatter {
            title
            subtitle
            date
          }
        }
      }
    `}
      render={data => (
        <section id="main-slider">
          <article class="content">
            <div class="hero-container">
              <img src={hero} alt="Image not found" />
              <div class="hero-content">
                <h1>{data.content.frontmatter.title}</h1>
                <h2>{data.content.frontmatter.subtitle}</h2>
                <p>{data.content.frontmatter.date}</p>
              </div>
            </div>
          </article>
        </section>
      )}
    />
    );
  }
}
