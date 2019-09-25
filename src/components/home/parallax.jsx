import React, {Component} from 'react';
import { Parallax, Background } from 'react-parallax';

export class LandingParallax extends Component {
  render() {
    const parallax = 
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
                <h3>By Students for Students</h3>
                <div class="quote">
                  <br/><p>We believe that to truly appeal to students’ minds and hearts, the ideas, planning, and execution of the conference must sprout from students.</p>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </section>
      
    return parallax;
  }
}