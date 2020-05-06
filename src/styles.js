import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
        font-size: 16px;
        @media (max-width: 640px) {
            font-size: 13px;
        }
    }
    a:link {
        color: #ffffff;
        text-decoration: none;
}
    a:visited {
        color: #ffffff;
}
`
export const MainContainer = styled.div`
    font-family: Assistant, sans-serif;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
    background-color: #111;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`
