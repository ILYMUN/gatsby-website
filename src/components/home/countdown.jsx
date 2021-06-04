import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import { Parallax, Background } from "react-parallax";

export class CountDownParallax extends Component {
  constructor(props) {
    super(props);
    var date = "5 Jun 2021 15:23:23";
    //this.endDate = new Date("5 Jun 2021 15:23:23").getTime();
    this.endDate = Date.parse(new Date(date));

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.endDate);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
    //console.log(diff);
    //console.log(Date.parse(new Date(endDate)));
    console.log(new Date(endDate.toString()));
    
    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    const countDownParallax = (
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
                  data-border-color="rgba(255, 255, 255, .8)"
                >
                  <div class="clock row">
                    <div class="clock-item clock-days countdown-time-value col-sm-3 col-md-3">
                      <div class="wrap">
                        <div class="inner">
                          <div id="canvas-days" class="clock-canvas"></div>
                          <div class="text">
                            <p class="val">
                              {this.addLeadingZeros(countDown.days)}
                            </p>
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
                            <p class="val">
                              {this.addLeadingZeros(countDown.hours)}
                            </p>
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
                            <p class="val">
                              {this.addLeadingZeros(countDown.min)}
                            </p>
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
                            <p class="val">
                              {this.addLeadingZeros(countDown.sec)}
                            </p>
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

    return (
      <StaticQuery
        query={graphql`
          {
            content: markdownRemark(
              frontmatter: {
                section: { eq: "countdown" }
                page: { eq: "home" }
              }
            ) {
              frontmatter {
                eventStartYearUtc
                eventStartMonthUtc
                eventStartDayUtc
                eventStartHourUtc
                eventStartMinuteUtc
              }
            }
          }
        `}
        render={data => {
          var date = data.content.frontmatter;

          this.endDate = Date.UTC(
            date.eventStartYearUtc,
            date.eventStartMonthUtc,
            date.eventStartDayUtc,
            date.eventStartHourUtc,
            date.eventStartMinuteUtc
          );
          return countDownParallax;
        }}
      />
    );
  }
}
