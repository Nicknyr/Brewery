import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LargeEagle from '../assets/large-eagle.jpg';
import Navbar from './Navbar';
import ScrollAnimation from 'react-animate-on-scroll';


const STYLES = styled.div`
    background: url(${LargeEagle});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;      
    height: 100vh;
    width: 100%; 
    position: relative;

    h1 {
        font-size: 2.2rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
    }

    h3 {
        //background: red;
        //width: 70%;
        //padding-left: 1rem;
    }

    h1, h3 {
        color: snow;
    }
    
    .container {
        position: absolute;
        top: 20rem;
        //width: 100%;
        padding: 1rem;
        background: linear-gradient(
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)
        )
    }
    
   
    @media(min-width: 768px) {
        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            text-transform: uppercase;
        }   

        h3 {
            //background: red;
            //width: 70%;
            //padding-left: 1rem;
        }

        .container {
            top: 15rem;
            left: 3rem;
            width: auto;
            padding: 1.5rem 1rem;
        }

        h5 {
            padding-top: 10em;
            font-size: 3rem;
        }
    }
`;

class Hero extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    render() {
        return (
            <STYLES>
                <Navbar />
                <div className="container">
                    <h1>Patriot Brewing Co.</h1>
                    <h3>NYC's Top Craft Brewery & Restuarant</h3>
                </div>
            </STYLES>
        );
    }
}

export default Hero;