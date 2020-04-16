import { createGlobalStyle } from "styled-components";
import 'reset-css';

//font-family: 'Bitter', serif;
//font-family: 'Open Sans', sans-serif;

// #172A3A
// #FB3640 
// #3066BE
// #FCF7F8
// #1789FC

const GlobalStyles = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;700&family=Open+Sans:wght@400;700&display=swap');
        height: 100vh;
        width: 100%;
        font-family: 'Open Sans', sans-serif;
    }

    h1, h2, h3, h4, h5 {
        font-family: 'Bitter', serif;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.75rem;
    }
    
    h4 {
        font-size: 1.5rem;
    }

    a {
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        text-decoration: none;
    }

    p {
        font-size: 1.1rem;
        line-height: 1.4;
    }

    // Hover effect for nav links
    .underline {
        transition: .3s all linear;
        position: relative;
        padding: .3em 0;

        &:before, &:after {
            content: "";
            height: 2px;
            width: 0%;
            background: #1789FC;
            position: absolute;
            bottom: 0;
            transition: .2s all linear;
        }

        &:before {
            left: 50%;
        }
        
        &:after {
            right: 50%;
        }
        
        &:hover {
            color: #1789FC;

            &:before, &:after {
                width: 100%;
            }

            &:before {
                left: 0%;
            }

            &:after {
                right: 0%;
            }
        }
        
    }
    
`;



export default GlobalStyles;