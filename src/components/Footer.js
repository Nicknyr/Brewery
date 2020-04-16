import React from 'react';
import styled, { css } from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Logo from '../assets/logo-2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/*
const STYLES = styled.div`
    height: auto;
    width: 100%;
    background: #3066BE;
    color: snow;
    padding: 2rem 1rem;

    .section {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .section-header {
        text-transform: uppercase;
        font-size: 1.1rem;
        padding-bottom: .5rem;
    }

    p {
        padding-top: .3rem;
    }

    ul {
        li {
            padding-top: .5rem;

            a {
                color: snow;
                font-weight: 100;
            }
        }
    }
`;

const Footer = () => {
    return (
        <STYLES>
            <ul>
                <li>
                    <img src={Logo} height="75" width="auto"/>
                    <h4>Patriot Brewery Co.</h4>
                    <p>123 Main Street </p>
                    <p>New York, NY, 10001</p>
                </li>
                <li className="section">
                    <ul>
                        <li>
                            <h4 className="section-header">About</h4>
                        </li>
                        <li>
                            <a href="#" className="underline">Link 1</a>
                        </li>
                        <li>
                            <a href="#" className="underline">Link 2</a>
                        </li>
                        <li>
                            <a href="#" className="underline">Link 3</a>
                        </li>
                        <li>
                            <a href="#" className="underline">Link 4</a>
                        </li>
                    </ul>
                </li>
                <li className="section">
                    <ul>
                        <li>
                            <h4 className="section-header">Press</h4>
                        </li>
                        <li>
                            <a href="#" className="underline">Link 1</a>
                        </li>
                        <li>
                            <a href="#" className="underline">Link 2</a>
                        </li>
                        <li>
                            <a href="#" className="underline">Link 3</a>
                        </li>
                        <li>
                            <a href="#" className="underline">Link 4</a>
                        </li>
                    </ul>
                </li>
                <li className="section">
                    <ul>
                        <li>
                            <h4 className="section-header">Menus</h4>
                        </li>
                        <li>
                            <a href="#" className="underline">Link 1</a>
                        </li>
                        <li>
                            <a href="#" className="underline">Link 2</a>
                        </li>
                        <li>
                            <a href="#" className="underline">Link 3</a>
                        </li>
                        <li>
                            <a href="#" className="underline">Link 4</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </STYLES>
    );
}

export default Footer;
*/

const STYLES = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Frank+Ruhl+Libre|Roboto+Condensed&display=swap');
    font-family: 'Roboto Condensed', sans-serif;
    height auto;
    width: 100%;
    background: #3066BE;
    background: #1E2019;
    color: snow;
    font-size: 18px;
    
    svg {
        color: snow;
        &:hover {
            color: #1789FC;
        }
    }
`;

const FOOTER = styled.footer`
    padding: 3rem 0;
    line-height: 1.8;
`;

const CONTAINER = styled.div`
    //background: grey;
    height: 100%;
    width: auto;
    margin-right: 20px;
    margin-left: 20px;
    display: flex;
    flex-wrap: wrap;

    @media(min-width: 768px) {
        padding-left: 5%;
        padding-right: 5%;
    }

    .section-1, .section-2, .section-3, .section-4 {
        width: 100%;
    }

    .section {
        display: flex;
        flex-direction: column;
        height: auto;
        text-align: left;
        //width: 100%;
        
        .inner {
            //background: red;
            margin: 0 0 2rem;
            font-size: 1rem;
            width: 100%;
        }

        .split {
            //background: red;
            width: 100%;
        }

        a {
            font-size: 1.1em;
            //color: #ECD2C9;
            color: #3066BE;
            text-decoration: underline;

            &:hover {
                text-decoration: none;
                color: #1789FC;
            }
        }

        h5 {
            font-size: 1.4em;
            width: 80%;
            line-height: 1.45;
            font-weight: bold;
            margin-bottom: .2em;
        }

        p {
            margin-bottom: .2em;
        }

        .location-h5 {
            font-size: 1.1em;
            //color:  #FC4C46;
        }

        .location-p {
            font-size: 1.4em;
            line-height: 1.4;
            font-weight: bold;
        }
    }

    .nav-container {
        margin-top: 1rem;
        
        .nav {
            display: flex;
            flex-wrap: wrap;
            li {
                font-size: 1.4rem;
                
                a {
                    text-decoration: none;
                    margin: .2rem;
                    color: snow;
                    &:hover {
                        color: #1789FC;
                    }
                }
            }
        }
        .social-ul {
            margin-top: 1.3rem;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-evenly;
        }
    }
    @media(min-width: 768px) {
        .section {
            //width: 50%;
            flex-direction: column;
            a {
            font-size: 1.1em;
            
            }
            h5 {
                font-size: 1.8em;
            }
            p {
                margin-bottom: .2em;
            }
            .location-h5 {
                font-size: 1.2em;
                padding-top: .3em;
            }
            .location-p {
                font-size: 1.4em;
                line-height: 1.4;
            }
        }
        .section-1 {
            flex-flow: column nowrap;
            justify-content: space-between;
            flex: 1;
            .inner {
                width: 100%;
                height: 8em;
            }
        }
        .section-3 {
            flex-direction: row;
        }
        .nav-container {
            display: flex;
            flex-direction: row;
            width: 100%;
            .nav {
                flex: 2;
                li {
                    font-size: 1.2rem;
                }
            }
            .social-ul {
                margin: 0;
                justify-content: space-evenly;
            }
            .social-media-icons {
                justify-content: space-evenly;
                flex: 1;
            }
        }
    }
    @media(min-width: 992px) {
        .section-2 {
            flex-flow: column nowrap;
            justify-content: space-between;
            flex: 1;
        }
        .section-3 {
            margin-top: 5rem;
            .nav {
                flex: 2;
                li {
                    margin-left: .5em;
                    margin-right: .5em;
                }
            }
        }
        .section-4 {
           margin-top: 4rem;
           align-items: center;
       }
    }
    
`;


const FORM = styled.form`
    height: auto;
    width: 100%;
    //background: green;
    .form-element {
        margin-bottom: 1.2rem;
    }
    .input-wrapper {
        width: 100%;
        background-color: transparent;
        overflow: auto;
    }
    input[type="text"] {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #fff;
        width: 100%;
        color: #fff;
        height: 2em;
        padding: 0.7rem 0.7rem;
        font-size: 1rem;
        outline: none;
        textarea {
            display: block;
            width: 100%;
            //height: calc(1.8em + 1.4rem + 0);
            //padding: 0.7rem 0.7rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.8;
            color: #121212;
            background-color: #fff;
            background-clip: padding-box;
            border: 0 solid #ced4da;
            border-radius: 0;
            transition: border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
        }
        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: #fff;
            font-size: 1.2rem;
        }
        ::-moz-placeholder { /* Firefox 19+ */
            color: #fff;
            font-size: 1.2rem;
        }
        :-ms-input-placeholder { /* IE 10+ */
            color: #fff;
            font-size: 1.2rem;
        }
        :-moz-placeholder { /* Firefox 18- */
            color: #fff;
            font-size: 1.2rem;
        }
        
    }
    .submit-button {
        background: red;
        display: inline-block;
        height: 5em;
        width: 8em;
        border: 0 solid transparent;
        text-align: center;
        vertical-align: middle;
        padding: 1.15rem 1.6rem;
        line-height: 1.3;
        transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 0.04rem;
        //background-color: #01BE9D;
        background-color: #1789FC;
        //color: #01BE9D;
        color: snow;
        opacity: 0.9;
        &:hover {
            opacity: 1;
        }
    }
`;

 const COPYRIGHT = styled.div`
    margin-top: 5em;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    //justify-content: space-evenly;
    font-size: .7em;
    color: #ECD2C9;
 `;

const ThirdFooter = () => {
    return(
        <STYLES>
            <ScrollAnimation animateIn="fadeIn" duration="2">
                <FOOTER>
                    <CONTAINER>
                        <div className="section section-1"> 
                            <div className="inner split">
                                <h5>Interested in making a reservation?</h5>
                                <a href="">Get in touch</a>
                            </div>
                            <div className="inner split">
                                <h5>Join our team</h5>
                                <a href="">View open positions</a>
                            </div>
                        </div>
                        <div className="section section-1">
                            <div className="inner">
                                <h5 className="location-h5">Address</h5>
                                <p className="location-p">
                                    356 Lafayette St.
                                    <br/>
                                    New York, NY 10001
                                </p>
                            </div>
                            {/*
                            <div className="inner">
                                <h5 className="location-h5">Miami Office</h5>
                                <p className="location-p">
                                    98 Biscayne Blvd.
                                    <br/>
                                    Miami, FL 33101
                                </p>
                            </div>
                            */}
                        </div>
                        <div className="section section-2">
                            <h5>Join our mailing list</h5>
                            <FORM>
                                <div className="form-element">
                                    <div className="input-wrapper">
                                        <input type="text" placeholder="Email Address *"></input>
                                    </div>
                                </div>
                                <div className="form-element">
                                    <div className="privacy">
                                        <input type="checkbox"></input>
                                        <label>I give my consent that my personal information can be collected and used according to the privacy policy</label>
                                    </div>
                                </div>
                                <div className="form-element">
                                    <div className="button-container">
                                        <button className="submit-button">Submit</button>
                                    </div>
                                </div>
                            </FORM>
                        </div>
                        <div className="section section-3">
                            <div className="nav-container">
                                <ul className="nav nav-footer">
                                    <li>
                                        <a href="">About</a>
                                    </li>
                                    <li>
                                        <a href="">Menu</a>
                                    </li>
                                    <li>
                                        <a href="">Tours</a>
                                    </li>
                                    <li>
                                        <a href="">Contact</a>
                                    </li>
                                    <li>
                                        <a href="">Careers</a>
                                    </li>
                                </ul>
                                <div className="social-media-icons">
                                    <ul class="social-ul">
                                        <li>
                                            <a href="">
                                                <FontAwesomeIcon
                                                    icon={['fab', 'yelp']}
                                                    size="lg"
                                                    color="snow"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <FontAwesomeIcon
                                                    icon={['fab', 'facebook-square']}
                                                    size="lg"
                                                    color="snow"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <FontAwesomeIcon
                                                    icon={['fab', 'instagram']}
                                                    size="lg"
                                                    color="snow"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <FontAwesomeIcon
                                                    icon={['fab', 'twitter-square']}
                                                    size="lg"
                                                    color="snow"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="section section-4">
                            <COPYRIGHT>
                                <p>&#169; Company 2020
                                    <span> | </span>
                                    <a href="#">Privacy Policy</a>
                                </p>
                            </COPYRIGHT>
                        </div>
                    </CONTAINER>
                </FOOTER>
             </ScrollAnimation>
        </STYLES>
    );
}

export default ThirdFooter;