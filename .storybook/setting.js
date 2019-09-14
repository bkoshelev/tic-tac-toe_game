
import { css } from 'linaria';
import React from 'react';


const pageWrapperDecoratorStyle = css`
  :global() {
    body {
      margin: 0px;
      overflow-x: hidden;
    }
  }
`;

const pageWrapperDecorator = storyFn => (
  <div
    className={pageWrapperDecoratorStyle}
    style={{
      width: '100vw',
      height: '100vh',
      display: 'grid',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: '#1b1942',
    }}>
      {storyFn()}
  </div>
);

const mobileViewPortSetting = {
    parameters: { viewport: { defaultViewport: 'iphone6' } },
  };

  const desktopViewPortSetting = {
    parameters: {
      viewport: { name: 'Desktop', type: 'Desktop' },
      styles: {
        width: '50%',
        height: '50%',
      },
    },
  };

  const ZoomImage = ({ children}) => {

    const style = css`
    transition-duration: 1s;

     
      &:hover {
        @media only screen and (orientation: landscape) {
        position: relative;
        
          transform: translateX(10vw) scale(2);
          z-index: 999; 
        }
      }
    `;

    return <div className={style}>{children}</div>
  }


export { mobileViewPortSetting, desktopViewPortSetting, pageWrapperDecorator, ZoomImage}