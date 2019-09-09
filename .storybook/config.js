import { configure, addParameters } from '@storybook/react';



configure(
    [
      require.context('../src', true, /\.stories\.mdx$/),
      require.context('../src', true, /\.stories\.js$/),
    ],
    module
  );