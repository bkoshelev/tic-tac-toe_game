import React from 'react';
import PropTypes from 'prop-types';

import { css, cx } from 'linaria';

const buttonStyle = css`
  @media only screen and (orientation: portrait) {
    height: 10vh;
    width: 50vw;
  }

  @media only screen and (orientation: landscape) {
    height: 20vh;
    width: 50vw;
  }

  border-radius: 50px;
  background: linear-gradient(45deg, white 0%, #507cff 30% 70%, white 100%);
  background-size: 250% 100%;
  background-position: 100% 50%;
  transition: all 1s ease-out;
  text-align: center;
  &:hover {
    background: linear-gradient(45deg, white 0%, #507cff 30% 70%, white 100%);
    cursor: pointer;
  }
  &:focus {
    background: linear-gradient(
      45deg,
      #507cff 0%,
      #507cff 30% 70%,
      #507cff 100%
    );
  }
`;

const textStyle = css`
  font-family: Montserrat, sans-serif;
  text-align: center;
  font-size: 5vw;
  font-weight: bold;
  vertical-align: middle;
`;

const StartGameButtonUI = ({ children, style, events }) => {
  return (
    <button
      type="button"
      {...events}
      className={cx(buttonStyle, textStyle, style)}>
      {children}
    </button>
  );
};

StartGameButtonUI.propTypes = {
  children: PropTypes.node,
  events: PropTypes.objectOf(PropTypes.func),
  style: PropTypes.string,
};

export default StartGameButtonUI;
