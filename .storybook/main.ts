import type { StorybookConfig } from "@storybook/nextjs";
import { Configuration, DefinePlugin } from 'webpack';

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  features: {
    experimentalRSC: true
  },
  webpackFinal: async (config: Configuration) => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new DefinePlugin(
        Object.keys(process.env)
          .reduce(
            (acc, key) => ({
              ...acc,
              [`process.env.${key}`]: JSON.stringify(process.env[key]),
            }),
            {}
          )
      )
    );
    return config;
  },
  env: (config) => ({
    ...config,
    STORYBOOK_RUNIN: 'true'
  }),
};
export default config;
