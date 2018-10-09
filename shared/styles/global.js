import { injectGlobal } from 'styled-components';

export default injectGlobal`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100%;
    }

    /* Quick fix for: https://github.com/zeit/next.js/issues/2708 */
    html, body, body > div:first-child, #__next, #__next > div:first-child {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    body {
        -webkit-font-smoothing: antialiased;
        font-family: 'Open Sans', sans-serif, sans-serif !important;
        color: #86939a;
        font-size: 1rem;
        font-weight: 400;
        max-width: 100vw;
        overflow-x: hidden;
    }

    h1, h2, h3, h4, h5, h6 {
        color: #2A2A2A;
    }

    h3 {
        font-size: 26px;
        font-weight: 600;
        margin: 0 0 30px 0;
    }

    h4 {
        margin: 0 0 10px 0;
    }

    a {
        color: #2A2A2A;
        text-decoration: none;
        transition: color 200ms ease;

        :hover {

        }
    }

    img {
        display: block;
        max-width: 100%;
    }
`;
