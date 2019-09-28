import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";

export class CountDownParallax extends Component {
  render() {
    /**
     * UPDATE THIS TO SET THE EVENT START TIME FOR THE COUNTDOWN TO WORK
     * See: https://www.geeksforgeeks.org/date-utc-javascript/ for information on Date.UTC()
     */
    const eventTime = Date.UTC(2019, 0, 24, 9, 0, 0) / 1000;

    const countdown = (
      <section class="parallax count-down" style={{ marginTop: "25px" }}>
        <div
          class="top-angle"
          style={{
            height: "150px",
            position: "absolute",
            backgroundColor: "#ecf0f1",
            zIndex: "2",
            width: "100vw",
            transform: "rotate(-3deg) skew(-3deg) scale(1.1, 1)",
            marginTop: "-75px"
          }}
        ></div>
        <Parallax
          bgImage={require("../../../static/images/parallax/count-down.jpg")}
          strength={300}
        >
          <div class="parallax-window dotted-overlay">
            <div class="container">
              <div class="content">
                <h3>Time Until Next Event</h3>
                <div
                  class="countdown countdown-container container"
                  data-end={eventTime.toString()}
                  data-now={(new Date().getTime() / 1000).toString()}
                  data-border-color="rgba(255, 255, 255, .8)"
                >
                  <div class="clock row">
                    <div class="clock-item clock-days countdown-time-value col-sm-3 col-md-3">
                      <div class="wrap">
                        <div class="inner">
                          <div id="canvas-days" class="clock-canvas"></div>
                          <div class="text">
                            <p class="val">0</p>
                            <p class="type-days type-time">DAYS</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clock-item clock-hours countdown-time-value col-sm-3 col-md-3">
                      <div class="wrap">
                        <div class="inner">
                          <div id="canvas-hours" class="clock-canvas"></div>
                          <div class="text">
                            <p class="val">0</p>
                            <p class="type-hours type-time">HOURS</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clock-item clock-minutes countdown-time-value col-sm-3 col-md-3">
                      <div class="wrap">
                        <div class="inner">
                          <div id="canvas-minutes" class="clock-canvas"></div>
                          <div class="text">
                            <p class="val">0</p>
                            <p class="type-minutes type-time">MINUTES</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="clock-item clock-seconds countdown-time-value col-sm-3 col-md-3">
                      <div class="wrap">
                        <div class="inner">
                          <div id="canvas-seconds" class="clock-canvas"></div>
                          <div class="text">
                            <p class="val">0</p>
                            <p class="type-seconds type-time">SECONDS</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </section>
    );

    return countdown;
  }
}
