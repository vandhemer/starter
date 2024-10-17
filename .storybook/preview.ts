import type { Preview } from "@storybook/react";
import '../stories/styles/globals.css';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
initialize({ onUnhandledRequest: 'warn' });

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: 'iphone14promax',
    },
    nextjs: {
      appDirectory: true,
    },
  },
  loaders: [mswLoader],
};

export default preview;
