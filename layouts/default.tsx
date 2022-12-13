import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Golos Text';
    src: url('/font/GolosText-Medium.eot');
    src: local('Golos Text Medium'), local('GolosText-Medium'),
      url('/font/GolosText-Medium.eot?#iefix') format('embedded-opentype'),
      url('/font/GolosText-Medium.woff2') format('woff2'),
      url('/font/GolosText-Medium.woff') format('woff'),
      url('/font/GolosText-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Golos Text';
    src: url('/font/GolosText-Black.eot');
    src: local('Golos Text Black'), local('GolosText-Black'),
      url('/font/GolosText-Black.eot?#iefix') format('embedded-opentype'),
      url('/font/GolosText-Black.woff2') format('woff2'),
      url('/font/GolosText-Black.woff') format('woff'),
      url('/font/GolosText-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Golos Text';
    src: url('/font/GolosText-DemiBold.eot');
    src: local('Golos Text DemiBold'), local('GolosText-DemiBold'),
      url('/font/GolosText-DemiBold.eot?#iefix') format('embedded-opentype'),
      url('/font/GolosText-DemiBold.woff2') format('woff2'),
      url('/font/GolosText-DemiBold.woff') format('woff'),
      url('/font/GolosText-DemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Golos Text';
    src: url('/font/GolosText-Bold.eot');
    src: local('Golos Text Bold'), local('GolosText-Bold'),
      url('/font/GolosText-Bold.eot?#iefix') format('embedded-opentype'),
      url('/font/GolosText-Bold.woff2') format('woff2'),
      url('/font/GolosText-Bold.woff') format('woff'),
      url('/font/GolosText-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Golos Text';
    src: url('/font/GolosText-Regular.eot');
    src: local('Golos Text Regular'), local('GolosText-Regular'),
      url('/font/GolosText-Regular.eot?#iefix') format('embedded-opentype'),
      url('/font/GolosText-Regular.woff2') format('woff2'),
      url('/font/GolosText-Regular.woff') format('woff'),
      url('/font/GolosText-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }


  html, body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Golos Text', sans-serif;
  }

  body{
    background:#F3F3F3;
    font-size: 14px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

`;

const DefaultLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default DefaultLayout;
