import React from 'react';
import { css } from 'linaria';

const headerStyle = css`
  display: block;
  width: 90vh;
  height: 9vh;
  font: 900 60px Montserrat, sans-serif;

  line-height: 9vh;
  letter-spacing: 5px;

  color: #fff;
  text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  text-align: center;

  @media only screen and (orientation: portrait) {
    font-size: 5vw;
  }
  @media only screen and (orientation: landscape) {
    font-size: 5vh;
  }
`;
const GameHeaderUI = ({ children }) => {
  return (
    <h1 className={headerStyle}>
      <span>{children}</span>
    </h1>
  );
};

export default GameHeaderUI;
