import React from 'react';
import styled, { css } from 'styled-components';

const STYLES = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;

    .style {
        white-space: nowrap; 
        text-align: center; 
        //width: 500px; 
        padding: 6px 0;
    }

    .left, .right {
        width: 100%;
        height: 50vh;
    }

    .left {
        background: red;
        justify-content: center;
        align-items: center;
        order: 2;

        iframe {
            display: flex;
            margin: 0 auto;
            //padding-top: 5rem;
            //padding-bottom: 5rem;
            height: 100%;
        }
    }

    .right {
        background: blue;
        order: 1;
    }

    @media(min-width: 768px) {
        flex-direction: row;


        .left {
            order: 1;

            iframe {
                display: flex;
                margin: 0 auto;
            }
        }

        .right {
            order: 1;
        }

        .left, .right {
            width: 50%;
        }
    }
`;

const Contact = () => {
    return (
        <STYLES>
            <div className="left">
                <iframe width="100%" height="300px" frameborder="0" src="https://www.bing.com/maps/embed?h=400&w=500&cp=40.726275294227946~-73.99647328376953&lvl=17&typ=d&sty=r&src=SHELL&FORM=MBEDV8" scrolling="no">
                </iframe>
                {/*
                <div className="style">
                    <a id="largeMapLink" target="_blank" href="https://www.bing.com/maps?cp=40.726275294227946~-73.99647328376953&amp;sty=r&amp;lvl=17&amp;FORM=MBEDLD">View Larger Map</a> &nbsp; | &nbsp;
                    <a id="dirMapLink" target="_blank" href="https://www.bing.com/maps/directions?cp=40.726275294227946~-73.99647328376953&amp;sty=r&amp;lvl=17&amp;rtp=~pos.40.726275294227946_-73.99647328376953____&amp;FORM=MBEDLD">Get Directions</a>
                </div>
                */}
            </div>
            <div className="right">

            </div>
        </STYLES>
    );
}

export default Contact;