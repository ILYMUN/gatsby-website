import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export class LandingQuotes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const quotes = 
      <section id="people">
        <div class="white-bg angular section-padding">
          <div class="top-angle"></div>
            <div class="container">
              <div class="row">
              <ScrollAnimation animateIn="bounceInUp" animateOnce>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <h2 class="lg-title text-center"><span>What People Say about ILYMUN?</span></h2>

                <OwlCarousel
                  className="quotes-slider"
                  loop
                  margin={10}
                  // nav
                  items={1}
                  autoplay
                  autoplayTimeout={8000}
                  autoplayHoverPause
                  autoHeight
                  animateOut={'fadeOut'}
                  dots
                >
                  {this.props.quotes.map(q => 
                    <div class="item">
                      <h3>"{q.quote}"</h3>
                      <h4>- {q.author}</h4>
                    </div>
                  )}
                </OwlCarousel>

                {/* <div id="people-slider" style={{height: '100px'}}> {
                  this.props.quotes.map(q => 
                    <div class="owl-item">
                      <h3>"{q.quote}"</h3>
                      <h4>- {q.author}</h4>
                    </div>
                  )
                } </div> */}
                {/* <div id="customDots" class="owl-dots">
                  <i class="fa fa-circle owl-dot active" goto="0"></i>
                  <i class="fa fa-circle owl-dot" goto="1"></i>
                  <i class="fa fa-circle owl-dot" goto="2"></i>
                  <i class="fa fa-circle owl-dot" goto="3"></i>
                  <i class="fa fa-circle owl-dot" goto="4"></i>
                </div> */}
              </div>
              </ScrollAnimation>
              </div>
              <div class="section-content">

            </div>
            <div class="bottom-angle"></div>
          </div>
        </div>
      </section>
      
    return quotes;
  }
}

LandingQuotes.defaultProps = {
  quotes: [
    {
      quote: "For me as a journalist it's always very interesting to interact with young people,  just to see how interested they are in the world around them,  the realities of the world, and how they prepare for them.",
      author: "Peter Barabas, Chief Editor at Euronews"
    },
    {
      quote: "It's a gathering of young people who are comming up with fresh ideas, who are practicing a kind of methodology which I find absolutely needed to tackle today's problems.",
      author: "Mr. Jürgen Stock, Head of Interpol"
    },
    {
      quote: "It is great to be able to work towards a common goal and creating friendships with people from all over Europe, but I've got to say, three days isn't long enough.",
      author: "Fanny Rovere, Chair"
    },
    {
      quote: "It's wonderful being part of this amazing event, being able to discuss and debate with future leaders, heroes and activists whom, with a tiny bit of luck, will do something for this world.",
      author: "Emilie Vandame, Delegate"
    }
  ]
}