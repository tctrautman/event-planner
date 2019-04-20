import styled, { createGlobalStyle } from 'styled-components';

const theme = {
  nicePastels: [
    '#A1C6F1', '#F9F29B', '#EB89FF', '#87F4DB', '#F2B653',
  ],
  darkGrey: '#323232',
  lightGrey: '#D8D8D8',
  veryLightGrey: '#EAEAEA',
  darkBlue: '#383F7D',
  white: '#FFFFFF',
  columns: {
    minWidth: '35px',
  },
  textColor: '#2D4663'
};

const TimelineContainer = styled.div`
    width: 95%;
    margin: 0 auto;
    overflow: scroll;
    border: 1px solid ${props => props.theme.darkGrey};
    border-radius: 20px;
    background: white;
`;

const RootContainer = styled.div`
  h2, p {
    color: ${props => props.theme.textColor};
    text-align: center;
  }

  h2 {
    font-size: 56px;
  }

  p {
    font-size: 20px;
    margin-bottom: 50px;
  }

`;

const GlobalStyleContainer = createGlobalStyle`
    html {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 13px;
        background: #E5F1FF;
    }
`;

export { theme, TimelineContainer, GlobalStyleContainer, RootContainer };
