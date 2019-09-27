import React, {Component} from 'react';
import { StaticQuery, graphql } from 'gatsby'
import LazyLoad from 'react-lazyload';
import ScrollAnimation from 'react-animate-on-scroll';

export class LandingTeam extends Component {
  render () {
    return <StaticQuery
      query={graphql`
      {
        content: markdownRemark(frontmatter: {section: {eq: "team"}, page: {eq: "home"}}) {
          frontmatter {
            title
            subtitle
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
                <h2 class="section-title">{data.content.frontmatter.title}</h2>
                <p class="section-description">
                  {data.content.frontmatter.subtitle}
                </p>
              </div>
            </ScrollAnimation>
              <div class="section-content">
                <div class="row">
                  <div class="col-md-4 col-sm-4">
                  <ScrollAnimation animateIn="bounceInUp" animateOnce>
                    <LazyLoad>
                      <img src={require("../../../public/images/team/estee.jpg")} />
                    </LazyLoad>
                    <p>Estée Poichot</p>
                  </ScrollAnimation>
                  </div>
                  <div class="col-md-4 col-sm-4">
                  <ScrollAnimation animateIn="bounceInUp" animateOnce>
                    <LazyLoad>
                      <img src={require("../../../public/images/team/justine.jpg")} />
                    </LazyLoad>
                    <p>Justine Seguin</p>
                  </ScrollAnimation>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <ScrollAnimation animateIn="bounceInUp" animateOnce>
                    <LazyLoad>
                      <img src={require("../../../public/images/team/david.jpg")} />
                    </LazyLoad>
                    <p>David Genaro Garcia</p>
                    </ScrollAnimation>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <ScrollAnimation animateIn="bounceInUp" animateOnce>
                    <LazyLoad>
                      <img src={require("../../../public/images/team/remi.jpg")} />
                    </LazyLoad>
                    <p>Rémi Fodor</p>
                    </ScrollAnimation>
                  </div>
                  <div class="col-md-4 col-sm-4">
                   <ScrollAnimation animateIn="bounceInUp" animateOnce>
                    <LazyLoad>
                      <img src={require("../../../public/images/team/line.jpg")} />
                    </LazyLoad>
                    <p>Line Teixeira</p>
                    </ScrollAnimation>
                  </div>
                  <div class="col-md-4 col-sm-4">
                    <ScrollAnimation animateIn="bounceInUp" animateOnce>
                    <LazyLoad height={200}>
                      <img src={require("../../../public/images/team/matthieu.jpg")} />
                    </LazyLoad>
                    <p>Matthieu Contamin</p>
                    </ScrollAnimation>
                  </div>
                </div>
                <div class="row">
                  <ScrollAnimation animateIn="bounceInUp" animateOnce>
                  <form action="/team/">
                    <button type="submit" class="button" style={{display: 'block', margin: '0 auto'}}>See the Entire Team</button>
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
  }
}