import React, {Component} from 'react';
import HeroSlider, {
    Slide,
    Nav,
    SideNav,
    MenuNav,
    ButtonsNav,
    AutoplayButton,
    OverlayContent,
} from 'hero-slider'

// Images
import kyoto from '../../../public/images/index-slider.jpg'
import tenryuJiTemple from '../../../public/images/about.jpg'
import hakone from '../../../public/images/index-slider.jpg'
import byodoInTemple from '../../../public/images/index-slider.jpg'

export class LandingSlider extends Component {

    constructor(props) {
        super(props)
        this.nextSlideHandler = null; // React.useRef()
        this.previousSlideHandler = null; // React.useRef()
    }

    render() {
        const LandingSlider = 
            <section id="main-slider">
                <article class="content">
                    <HeroSlider
                    nextSlide={this.nextSlideHandler}
                    previousSlide={this.previousSlideHandler}
                    slidingAnimation='top_to_bottom'
                    orientation='vertical'
                    initialSlide={1}
                    onBeforeChange={(previousSlide, nextSlide) => console.log('onBeforeChange', previousSlide, nextSlide)}
                    onChange={(nextSlide) => console.log('onChange', nextSlide)}
                    onAfterChange={(nextSlide) => console.log('onAfterChange', nextSlide)}
                    style={{
                    backgroundColor: '#000'
                    }}
                    settings={{
                    slidingDuration: 400,
                    slidingDelay: 100,
                    shouldAutoplay: true,
                    shouldDisplayButtons: false,
                    autoplayDuration: 8000,
                    height: '100vh'
                    }}>
                        {/* <Navbar />
                        <OverlayContainer>
                        <Wrapper>
                            <Title>
                            Navbar Slider
                            </Title>
                            <Subtitle>
                            Cool stuff.
                            </Subtitle>
                        </Wrapper>
                        </OverlayContainer> */}
                
                        <Slide
                        // shouldRenderMask
                        navDescription='Kyoto - Japan'
                        background={{
                            backgroundColor: '#6D9B98',
                            backgroundImage: kyoto
                        }} />
                
                        <Slide
                        // shouldRenderMask
                        navDescription='Tenryu-ji Temple - Kyōto-shi - Japan'
                        background={{
                            backgroundColor: '#8A8A8A',
                            backgroundImage: tenryuJiTemple
                        }} />
                
                        <Slide
                        // shouldRenderMask
                        navDescription='Hakone - Japan'
                        background={{
                            backgroundColor: '#EA2329',
                            backgroundImage: hakone
                        }} />
                
                        <Slide
                        // shouldRenderMask
                        navDescription='Byodo-In Temple - Kaneohe - United States'
                        background={{
                            backgroundColor: '#2D7791',
                            backgroundImage: byodoInTemple
                        }} />
                
                        {/* <MenuNav /> */}
                    </HeroSlider>
                </article>
            </section>

    return LandingSlider;
    }
}