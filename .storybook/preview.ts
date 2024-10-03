import type { Preview } from "@storybook/react";
import '../styles/globals.css';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { useEffect } from "react";

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
  // decorators: [
  //   (Story) => {
  //     useEffect(() => {

  //     })
  //   }
  // ]
};

export default preview;
