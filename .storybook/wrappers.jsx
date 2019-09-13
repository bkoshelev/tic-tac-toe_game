import React from 'react';
import { css } from 'linaria';

const littleCenterWrapperStyle = css`
  width: 30vw;
  height: 30vw;
  display: grid;
`;

const LittleCenterWrapper = ({children}) => <div class={littleCenterWrapperStyle}>{children}</div>;

export { LittleCenterWrapper};
