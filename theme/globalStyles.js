import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.cdnfonts.com/css/sunday');
    body {
      background-color: #9141B2;
      margin: 0;
      padding: 0;
      width: 100%;
      min-height: 100vh;
    }
    font-family: 'SUNDAY', sans-serif;
    color: #ACE464;
`;

export default GlobalStyle;