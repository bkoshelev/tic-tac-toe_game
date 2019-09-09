
import { css } from 'linaria';
import React from 'react';


const pageWrapperDecoratorStyle = css`
  :global() {
    body {
      margin: 0px;
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
   // decorators: [pageWrapperDecorator],
  };

  const desktopViewPortSetting = {
    parameters: {
      viewport: { name: 'Desktop', type: 'Desktop' },
      styles: {
        width: '50%',
        height: '50%',
      },
    },
  //  decorators: [pageWrapperDecorator],
  };


export { mobileViewPortSetting, desktopViewPortSetting, pageWrapperDecorator}