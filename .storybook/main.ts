import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  "stories": [
    "../tests/screenshot/*.mdx",
    "../tests/screenshot/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  }
};
export default config;
