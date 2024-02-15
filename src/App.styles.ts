import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        transition: 0.3s ease;        
    }
`;

export const Container = styled.div`
    background-color: #17181A;
    color: #797A81;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    width: 980px;
    padding: 10px;
`;

export const Header = styled.h1`
    color: #FFF;
    text-align: center;
    border-bottom: 1px solid #444;
    padding-bottom: 20px;
`;