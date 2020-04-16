import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery1 from '../assets/gallery1.jpg';
import Gallery2 from '../assets/gallery2.jpg';
import Gallery3 from '../assets/gallery3.jpg';
import Gallery4 from '../assets/gallery4.jpg';
import Gallery5 from '../assets/gallery5.jpg';
import Gallery6 from '../assets/gallery6.jpg';
import Gallery7 from '../assets/gallery7.jpg';
import Gallery8 from '../assets/gallery8.jpg';
import Gallery9 from '../assets/gallery9.jpg';
import Gallery10 from '../assets/gallery10.jpg';
import TanBackground from '../assets/tan-background.jpg';

const STYLES = styled.div`
    height: 30em;
    width: 100%;
    background: url(${TanBackground});
    display: flex;
    align-items: center;
`;

const CONTAINER = styled.div`
    height: 20em;
    width: 100%;
`;

const IMAGE = styled.div`

`

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 500,
            lazyLoad: true,
            initialSlide: 3
          };

        return (
            <STYLES>
                <CONTAINER>
                    <Slider {...settings}>
                        <IMAGE>
                            <img src={Gallery1} height="300px" width="100%"/>
                        </IMAGE>
                        <IMAGE>
                            <img src={Gallery2} height="300px" width="100%"/>
                        </IMAGE>
                        <IMAGE>
                            <img src={Gallery3} height="300px" width="100%"/>
                        </IMAGE>
                        <IMAGE>
                            <img src={Gallery4} height="300px" width="100%"/>
                        </IMAGE>
                        <IMAGE>
                            <img src={Gallery5} height="300px" width="100%"/>
                        </IMAGE>
                        <IMAGE>
                            <img src={Gallery6} height="300px" width="100%"/>
                        </IMAGE>
                        <IMAGE>
                            <img src={Gallery7} height="300px" width="100%"/>
                        </IMAGE>
                        <IMAGE>
                            <img src={Gallery8} height="300px" width="100%"/>
                        </IMAGE>
                        <IMAGE>
                            <img src={Gallery9} height="300px" width="100%"/>
                        </IMAGE>
                    </Slider>
                </CONTAINER>
            </STYLES>
        );
    }
}


export default Gallery;