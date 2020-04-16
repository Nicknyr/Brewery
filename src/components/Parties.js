import React from 'react';
import styled, { css } from 'styled-components';
import GroupPicture from '../assets/group-darker.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

const STYLES = styled.div`
    height: 40em;
    width: 100%;
    background: url(${GroupPicture});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CONTAINER = styled.div`
    width: auto;
    height: auto;
    margin: 0 auto;
    //background: red;
    text-align: center;

    h2 {
        color: snow;
        font-size: 3.5rem;
        margin: 0 auto;
        font-weight: bold;
    }

    p { 
        color: snow;
        font-size: 1.8rem;
        width: 50%;
        margin: 1rem auto;
        font-weight: bold;
    }
`;

const BUTTON = styled.button`
    font-size: 1.1rem;
    font-weight: bold !important;
    padding: .5rem 2rem;
    background: snow;
    border: none;
    display: block;
    margin: 0 auto;
    outline: none;
	*zoom: 1;
	text-align: center;
	text-decoration: none;
	font-family: inherit;
	font-weight: 300;
	letter-spacing: 1px;
	vertical-align: middle;
	border: none;
	transition: all 0.2s ease;
	box-sizing: border-box;
	text-shadow: 0 1px 0 rgba(0,0,0,0.01);
    margin-top: 3rem;
    text-transform: uppercase;

    &:hover {
        background: none;
        border: 1px solid snow;
        color: snow;
        cursor: pointer;
    }
`;

const Parties = () => {
    return (
        <STYLES>
            <ScrollAnimation animateIn="fadeIn" delay="500" duration="2" animateOnce="true">
                <CONTAINER>
                    <h2>Group Discount</h2>
                    <p>Make a reservation for a group of 8 or more and receive a 20% discount</p>
                    <BUTTON>Make Reservation</BUTTON>
                </CONTAINER>
            </ScrollAnimation>
        </STYLES>
    );
}

export default Parties;