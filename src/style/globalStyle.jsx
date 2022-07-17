import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%;
    }
    
    body {
      box-sizing: border-box;
      font-family: 'Mulish', sans-serif;
    }
    h1{
      font-size: clamp(3rem, 3vw, 4rem);
      white-space: nowrap;
      text-transform: capitalize;
      font-weight: 500;
      letter-spacing: .5rem;
      margin-bottom: 2rem;
      @media (min-width: 1000px){
        margin: 0
      }
    }

    h2{
      font-size: 2rem;
      letter-spacing: 0.1rem;
      font-weight: 300;
    }
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }
`;