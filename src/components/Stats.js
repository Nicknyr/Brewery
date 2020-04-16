import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp, {startAnimation} from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import TanBackground from '../assets/tan-background.jpg';

const STYLES = styled.div`
    height: auto;
    width: 100%;
    background: url(${TanBackground});
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 5rem;
    padding-top: 5rem;
    
    .counter {
        width: auto;
        display: flex;
        justify-content: space-around;
        margin: .2rem 0;

        p {
            font-size: 1.5em;
            color: snow;
        }
    }
`;

const UL = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: auto;
    width: 100%;
    background: #1E2019;
   

    li {
        list-style-type: none;
        text-align: center;
        padding-top: 2rem;
        padding-bottom: 2rem;

        p {
            font-size: 1.5rem;
            color: snow;
        }
    }

    h3 {
        margin-top: 1.5rem;
        color: snow;
        font-weight: 600;
    }

    @media(min-width: 768px) {
        flex-direction: row;
        height: 12rem;
    }
`;

const style = {
    componentName: {},
    col: {},
    countup: {},
  };

class Stats extends Component {
    constructor(props) {
        super(props);
        
        this.state = {

        };
    }

    onVisibilityChange = (isVisible) => {
        if(isVisible) {
            startAnimation(this.myCountUp);
        }
    }


    render() {
        return (
            <STYLES>
                <UL>
                    <li>
                        <FontAwesomeIcon
                            icon={'beer'}
                            size="3x"
                            color="snow"
                        />
                        <CountUp start={0} end={126} duration={5} startOnMount={false} >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <div className="counter">
                                    <p ref={countUpRef}></p>
                                    </div>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <p>Beers</p>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={'wine-bottle'}
                            size="3x"
                            color="snow"
                        />
                        <CountUp start={0} end={72} duration={5} startOnMount={false} >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <div className="counter">
                                    <p ref={countUpRef}></p>
                                    </div>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <p>Wines</p>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={'hamburger'}
                            size="3x"
                            color="snow"
                        />
                        <CountUp start={0} end={50} duration={5} startOnMount={false} >
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <div className="counter">
                                    <p ref={countUpRef}></p>
                                    </div>
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <p>Entrees</p>
                    </li>
                </UL>
            </STYLES>
        );
    }
}
    

export default Stats;


    
    
  

      

