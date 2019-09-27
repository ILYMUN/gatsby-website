import React, {Component} from 'react';
import { StaticQuery, graphql } from 'gatsby'
import { Parallax } from 'react-parallax';

export class LandingParallax extends Component {
  render() {
    return <StaticQuery
      query={graphql`
      {
        content: markdownRemark(frontmatter: {section: {eq: "parallax"}, page: {eq: "home"}}) {
          frontmatter {
            title
            content
          }
          html
        }
      }
      `}
      render={data => (
      <section class="parallax">
        <div class="top-angle" style={{
          height: "150px",
          position: "absolute",
          backgroundColor: "white",
          zIndex: "2",
          width: "100vw",
          transform: "rotate(-3deg) skew(-3deg) scale(1.1, 1)",
          marginTop: "-75px",
        }}></div>
        <Parallax 
          bgImage={require('../../../public/images/parallax/01.jpg')}
          strength={300}
        >
          <div class="parallax-window dotted-overlay">
            <div class="container">
              <div class="content">
                <h3>{data.content.frontmatter.title}</h3>
                <div class="quote">
                  <br/><p>{data.content.frontmatter.content}</p>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </section>)}
    />
  }
}