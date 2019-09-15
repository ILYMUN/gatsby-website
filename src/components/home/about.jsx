import React, {Component} from 'react';
import LazyLoad from 'react-lazyload';
import ScrollAnimation from 'react-animate-on-scroll';

export class HomeAboutSection extends Component {
  constructor(props) {
    super(props);
    
    const {
      title="About",
      desc="Ilymun, (International Lyon Model United Nations), is a three-day conference, organized by students in Lyon for students from around the world."
    } = this.props
  }

  render () {
    return (
      <section id="about">
          <div>
              <div class="white-bg angular section-padding">
                  <div class="top-angle"></div>
                  <div class="container">
                    <ScrollAnimation animateIn="slideInRight" animateOnce>
                      <div class="section-head">
                          <h2 class="section-title">About</h2>
                          <p class="section-description">
                              Ilymun, (International Lyon Model United Nations), is a three-day conference, organized by students in Lyon for students from around the world. </p>
                      </div>
                    </ScrollAnimation>
                      <div class="section-content">
                          <div class="row">
                          <ScrollAnimation animateIn="bounceInUp" animateOnce>
                              <div class="media-content col-md-5 col-sm-5">
                                  <div class="double-frame">
                                    <LazyLoad>
                                      <img src={require('../../../static/images/about.jpg')} />
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
                                  <h2 class="lg-title text-center"><span>This Year's Theme</span></h2>
                                  <div class="content">
                                      <p>
                                          In 2015 the UN adopted the 17 Sustainable Development Goals, and set targets for 2030. Our conference addresses Goal 10. In defining this goal, the UN explains that “Inequalities based on income, sex, age, disability, sexual orientation, race, class,
                                          ethnicity, religion and opportunity continue to persist across the world.”
                                      </p>
                                      <p>
                                          Economic growth is not enough to reduce these disparities. The gaps between the rich and the poor are growing bigger. It is clear that inequality is a serious threat to social and political stability as well as to the environment and sustained growth.
                                          Thus, inequalities within and among countries is one of our biggest challenges. According to the UN, “Inequality is not a matter of fate or chance and can be reversed through policies and reforms.”
                                      </p>
                                      <p>
                                          It is our hope that in debating issues regarding empowerment, opportunity and the social and economic inclusion of all, the delegates of ILYMUN 2019 will draft these much-needed policies and reforms.
                                      </p>
                                      <form action="/about/">
                                          <button type="submit" class="button">Learn More</button>
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
    );
  }
}