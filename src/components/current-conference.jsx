import React, { Component } from "react";
import Masonry from "react-masonry-component";

const masonryOptions = {
    transitionDuration: 0,
    itemSelector: ".masonryImage",
    columnWidth: ".masonryImage",
    percentPosition: true
};

const imagesLoadedOptions = { background: ".my-bg-image-el" };

export class Current extends Component {
    render() {
        const openingChildElements = [
            require("../../../static/images/gallery/sample/optimized/new_01.jpg").default,
            require("../../../static/images/gallery/sample/optimized/new_02.jpg").default,
            require("../../../static/images/gallery/sample/optimized/new_03.jpg").default
        ].map(function (src) {
            return (
                <div className="masonryImage col-md-1 col-sm-1 col-xs-1">
                    <img src={src} alt=""/>
                </div>
            );
        });

        const commiteeeChildElements = [
            require("../../../static/images/gallery/sample/optimized/new_01.jpg").default,
            require("../../../static/images/gallery/sample/optimized/new_02.jpg").default,
            require("../../../static/images/gallery/sample/optimized/new_03.jpg").default
        ].map(function (src) {
            return (
                <div className="masonryImage col-md-1 col-sm-1 col-xs-1">
                    <img src={src} alt=""/>
                </div>
            );
        });

        const page = (
            <div>
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
                    {openingChildElementshildElements}
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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ow2LeJfoes8?si=SJA3UQQCggwVj3x_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: relative;"></iframe>
                <br/>

                <h4>Articles</h4>
                <h5><a href="https://ilymun.org/images/Opening-Ceremony.pdf" download="Opening-Ceremony.pdf"><b>Opening-Ceremony</b></a></h5>
                <br/>

                <h3>Day 2: February 2nd 2024</h3>
                <br/>

                <h3>Day 3: February 3rd 2024</h3>
                <br/>
            </div>
        )

        return page;
    }
}