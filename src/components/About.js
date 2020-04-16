import React from 'react';
import styled, { css } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Seating from '../assets/seating.jpg';
import BeerBrewed from '../assets/beer-brewed-small.jpg';
import EmptySeating from '../assets/empty-seating-small.jpg';
import Growlers from '../assets/growlers-small.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hamburger from '../assets/hamburger-small.jpg';
import TanBackground from '../assets/tan-background.jpg';

const STYLES = styled.div`
    height: auto;
    width: 100%;
    background: url(${TanBackground});
`;

const CONTAINER = styled.div`
    height: auto;
    max-width: 100%;
    padding: 5rem 1rem;

    @media(min-width: 768px) {
        display: flex;
    }

`;

const INTROCONTAINER = styled.div`
background: blue;

    h2 {
        text-align: center;
        margin-bottom: 2rem;
        //color: #3066BE;
        color: #1789FC;
        font-weight: bold;
    }

    h4 {
        margin-bottom: .5rem;
        text-align: left;
        
        span {
            padding-left: .5rem;
        }
    }

    p {
        margin-top: 2rem;
    }

    @media(min-width: 768px) {
        width: 30%;
        margin: 0 auto;
    }
`

const UL = styled.ul`
    display: flex;
    flex-direction: column;
    background: red;

    @media(min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 60%;
    }
`;


const IMGCONTAINER = styled.li`
     height: auto;
     margin: 2rem auto;
     position: relative;

     @media(min-width: 768px) {
         width: 20em;
         margin: 1rem;
     }

     img {
        object-fit: cover;
        height: 200px;
        width: 100%;
    }
`;

const OVERLAY = styled.div`
    height: 4rem;
    width: 100%;
    background: linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
        );
    position: absolute;
    bottom: 0;
    left: 0;
    color: snow;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;

`;

const ICONCONTAINER = styled.div`
    height: auto;
    width: 100%;

    @media(min-width: 768px) {
        display: none;
    }
`;

const About = () => {
    return (
        <STYLES>
            <ScrollAnimation animateIn="fadeIn" delay="500" duration="2" animateOnce="true">
                <CONTAINER>
                    <INTROCONTAINER>
                        <h2>Patriot Brewing Co.</h2>
                        <ICONCONTAINER>
                            <h4>
                                <FontAwesomeIcon icon="check-square" color="#1789FC"/>
                                <span>Craft Beers</span>
                            </h4>
                            <h4>
                                <FontAwesomeIcon icon="check-square" color="#1789FC"/>
                                <span>Great Food</span>
                            </h4>
                            <h4>
                                <FontAwesomeIcon icon="check-square" color="#1789FC"/>
                                <span>Fun Atmosphere</span>
                            </h4>
                            <h4>
                                <FontAwesomeIcon icon="check-square" color="#1789FC"/>
                                <span>Brewery Tours</span>
                            </h4>
                        </ICONCONTAINER>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium. Urna porttitor rhoncus dolor purus. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Aliquam malesuada bibendum arcu vitae elementum curabitur. Bibendum at varius vel pharetra.
                        </p>
                    </INTROCONTAINER>
                    <UL>
                        <ScrollAnimation 
                                animateIn="fadeIn" 
                                delay="500" 
                                duration="2" 
                                animateOnce="true">
                                <IMGCONTAINER>
                                    <img src={BeerBrewed}/>
                                    <OVERLAY>50+ Craft Beers</OVERLAY>
                                </IMGCONTAINER>
                        </ScrollAnimation>
                        <ScrollAnimation 
                                animateIn="fadeIn" 
                                delay="500" 
                                duration="2"
                                animateOnce="true">
                                <IMGCONTAINER>
                                    <img src={Hamburger}/>
                                    <OVERLAY>Full Food Menu</OVERLAY>
                                </IMGCONTAINER>
                        </ScrollAnimation>
                        <ScrollAnimation 
                                animateIn="fadeIn" 
                                delay="500" 
                                duration="2"
                                animateOnce="true">
                                <IMGCONTAINER>
                                    <img src={Seating}/>
                                    <OVERLAY>Spacious & Fun Atmosphere</OVERLAY>
                                </IMGCONTAINER>
                        </ScrollAnimation>
                        <ScrollAnimation 
                                animateIn="fadeIn" 
                                delay="500" 
                                duration="2"
                                animateOnce="true">
                                <IMGCONTAINER>
                                    <img src={Growlers}/>
                                    <OVERLAY>Brewery Tours & More</OVERLAY>
                                </IMGCONTAINER>
                        </ScrollAnimation>
                    </UL>
                </CONTAINER>
            </ScrollAnimation>
        </STYLES>
    );
}

export default About;