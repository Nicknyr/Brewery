import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Logo from '../assets/logo-2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const STYLES = styled.div`
    height: 4.5rem;
    width: 100%;
    background: #191919;
    display: flex;
    justify-content: space-between;
    position: absolute;

    .logo-container {
        display: flex;
        align-items: center;
    }

    ul {
        display: none;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        margin-right: 3rem;

        li {
            margin-left: 1rem;

            a {
                color: snow;
                font-size: 1rem;
                font-family: 'Bitter', serif;
                text-transform: uppercase;
            }
        }
    }

    .hamburger-icon {
        display: flex;
        margin-right: 2.5rem;
        align-items: center;
        z-index: 1000;

    }

    .hamburger-menu {
        position: absolute;
        background: #3066BE;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        z-index: 999;
        color: snow;
        animation: fadein 1s;
        -moz-animation: fadein 1s; /* Firefox */
        -webkit-animation: fadein 1s; /* Safari and Chrome */
        -o-animation: fadein 1s; /* Opera */
    

        ul {
           display: flex;
           flex-direction: column;
           text-align: left;
           margin: 0;

           li {
               margin: 1rem 0;

               a {
                   font-size: 1.3rem;
               }
           }

        }
    }

    @media(min-width: 768px) {
        ul {
            display: flex;
        }

        .hamburger-icon {
            display: none;
        }
    }

    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-moz-keyframes fadein { /* Firefox */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-webkit-keyframes fadein { /* Safari and Chrome */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-o-keyframes fadein { /* Opera */
        from {
            opacity:0;
        }
        to {
            opacity: 1;
        }
    }
    `;


class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
          menuOpen: false
        };
    }

    handleClick = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    render() {
        return (
            <STYLES>
                <div className="logo-container">
                    <img src={Logo} />
                </div>
                <ul>
                    <li>
                        <a href="#" className="underline">About</a>
                    </li>
                    <li>
                        <a href="#" className="underline">Visit</a>
                    </li>
                    <li>
                        <a href="#" className="underline">Beers</a>
                    </li>
                    <li>
                        <a href="#" className="underline">Contact</a>
                    </li>
                </ul>
                <div onClick={this.handleClick} className="hamburger-icon">
                    {this.state.menuOpen ?
                        <FontAwesomeIcon icon="times" size="2x" color="snow" />
                    :
                        <FontAwesomeIcon icon="bars" size="2x" color="snow" />
                    }
                </div>
                {this.state.menuOpen ?
                    <div className="hamburger-menu">
                        <ul>
                            <li>
                                <a href="#" className="underline">About</a>
                            </li>
                            <li>
                                <a href="#" className="underline">Visit</a>
                            </li>
                            <li>
                                <a href="#" className="underline">Beers</a>
                            </li>
                            <li>
                                <a href="#" className="underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                    : null 
                }
            </STYLES>
        );
    }
    
}

export default Navbar;