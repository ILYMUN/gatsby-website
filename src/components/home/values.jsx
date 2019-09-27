import React, {Component} from 'react';
import { StaticQuery, graphql } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll';

import '@fortawesome/fontawesome-free/css/all.css'

export class LandingValues extends Component {
  render() {
    return <StaticQuery
      query={graphql`
      {
        content: markdownRemark(frontmatter: {section: {eq: "values"}, page: {eq: "home"}}) {
          frontmatter {
            title
            subtitle

            firstPointFontAwesomeIcon
            firstPointTitle
            firstPointContent

            secondPointFontAwesomeIcon
            secondPointTitle
            secondPointContent

            thirdPointFontAwesomeIcon
            thirdPointTitle
            thirdPointContent

            fourthPointFontAwesomeIcon
            fourthPointTitle
            fourthPointContent
          }
          html
        }
      }
      `}
      render={data => (
      <section id="values">
        <div class="white-bg angular section-padding">
          <div class="top-angle"></div>
          <div class="container">
            <div class="row">
            <ScrollAnimation animateIn="bounceInUp" animateOnce>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <h2 class="lg-title text-center"><span>{data.content.frontmatter.title}</span></h2>
              </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="bounceInUp" animateOnce>
              <div class="col-md-8 col-sm-12 col-xs-12 col-md-offset-2">
                <p class="lg-text text-center">{data.content.frontmatter.subtitle}</p>
              </div>
              </ScrollAnimation>
            </div>
          </div>
          <div id="feature" class="feature">
            <div class="container">
              <div class="row">
                <ScrollAnimation animateIn="bounceInUp" animateOnce>
                <div class="col-md-3 col-sm-6 col-xs-12">
                  <div class="feature-wrap">
                    <div class="icon-wrap"><i class={`fa fa-${data.content.frontmatter.firstPointFontAwesomeIcon}`}></i></div>
                    <h3>{data.content.frontmatter.firstPointTitle}</h3>
                    <p>{data.content.frontmatter.firstPointContent}</p>
                  </div>
                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="bounceInUp" animateOnce>
                <div class="col-md-3 col-sm-6 col-xs-12">
                  <div class="feature-wrap">
                    <div class="icon-wrap"><i class={`fa fa-${data.content.frontmatter.secondPointFontAwesomeIcon}`}></i></div>
                    <h3>{data.content.frontmatter.secondPointTitle}</h3>
                    <p>{data.content.frontmatter.secondPointContent}</p>
                  </div>
                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="bounceInUp" animateOnce>
                <div class="col-md-3 col-sm-6 col-xs-12">
                  <div class="feature-wrap">
                    <div class="icon-wrap"><i class={`fa fa-${data.content.frontmatter.thirdPointFontAwesomeIcon}`}></i></div>
                    <h3>{data.content.frontmatter.thirdPointTitle}</h3>
                    <p>{data.content.frontmatter.thirdPointContent}</p>
                  </div>
                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="bounceInUp" animateOnce>
                <div class="col-md-3 col-sm-6 col-xs-12">
                  <div class="feature-wrap">
                    <div class="icon-wrap"><i class={`fa fa-${data.content.frontmatter.fourthPointFontAwesomeIcon}`}></i></div>
                    <h3>{data.content.frontmatter.fourthPointTitle}</h3>
                    <p>{data.content.frontmatter.fourthPointContent}</p>
                  </div>
                </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </section>)
      }
    />
  }
}