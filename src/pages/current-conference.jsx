import React from "react";
import Masonry from "react-masonry-component";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

import "../../static/css/current.css";

const masonryOptions = {
    transitionDuration: 0,
    itemSelector: ".masonryImage",
    columnWidth: ".masonryImage",
    percentPosition: true
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

class CurrentConferencePgae extends React.Component {
    render() {
        const openingChildElements = [
            require("../../static/images/conf-2024/Ilymun1.png").default,
            require("../../static/images/conf-2024/Ilymun3.png").default,
            require("../../static/images/conf-2024/Ilymun12.png").default,
            require("../../static/images/conf-2024/Ilymun13.png").default,
            require("../../static/images/conf-2024/Ilymun14.png").default,
            require("../../static/images/conf-2024/Ilymun15.png").default,
            require("../../static/images/conf-2024/Ilymun16.png").default
        ].map(function (src) {
            return (
                <div className="masonryImage col-md-3 col-sm-4 col-xs-4">
                    <img src={src} alt=""/>
                </div>
            );
        });

        const commiteeeChildElements = [
            require("../../static/images/conf-2024/Ilymun2.png").default,
            require("../../static/images/conf-2024/Ilymun4.png").default,
            require("../../static/images/conf-2024/Ilymun5.png").default,
            require("../../static/images/conf-2024/Ilymun7.png").default,
            require("../../static/images/conf-2024/Ilymun8.png").default,
            require("../../static/images/conf-2024/Ilymun9.png").default,
            require("../../static/images/conf-2024/Ilymun10.png").default,
            require("../../static/images/conf-2024/Ilymun11.png").default,
            require("../../static/images/conf-2024/Ilymun17.png").default,
            require("../../static/images/conf-2024/Ilymun18.png").default,
            require("../../static/images/conf-2024/Ilymun19.png").default
        ].map(function (src) {
            return (
                <div className="masonryImage col-md-3.5 col-sm-4 col-xs-4">
                    <img src={src} alt=""/>
                </div>
            );
        });

        const page = (
            <div class="container">
                <Navbar/>

                <div className="content">
                    <h1>The Conference 2024</h1>

                    <h3>Day 1: February 1st 2024</h3>
                    <br/>

                    <h4>Opening Ceremony Photos</h4>
                    <Masonry
                        className={"masonry row"} 
                        elementType={"div"}
                        options={masonryOptions} 
                        disableImagesLoaded={false} 
                        updateOnEachImageLoad={false} 
                        imagesLoadedOptions={imagesLoadedOptions} 
                    >
                        {openingChildElements}
                    </Masonry>
                    <br/>
                    
                    <h4>Committees Photos</h4>
                    <Masonry
                        className={"masonry row"}
                        elementType={"div"} 
                        options={masonryOptions} 
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={false}
                        imagesLoadedOptions={imagesLoadedOptions}
                    >
                        {commiteeeChildElements}
                    </Masonry>
                    <br/>

                    <h4>Day 1 Video</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Ow2LeJfoes8?si=SJA3UQQCggwVj3x_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{position: "relative"}}></iframe>
                    <br/>

                    <h4>Articles</h4>
                    <h5><a href="https://ilymun.org/images/Opening-Ceremony.pdf" download="Opening-Ceremony.pdf"><b>Opening-Ceremony</b></a></h5>
                    <br/>

                    <h3>Day 2: February 2nd 2024</h3>
                    <br/>

                    <h3>Day 3: February 3rd 2024</h3>
                    <br/>
                    <h4>Closing Ceremony 2024</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/1vcMjx6eXcM?si=3E4pzDaeSOQOsFVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                    
                    <br/>

                    <Footer />
                </div>
            </div>
        );

        return page;
    }
}

export default CurrentConferencePgae;