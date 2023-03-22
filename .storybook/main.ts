import type { StorybookConfig } from "@storybook/core-common";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: [{ from: "../assets", to: "../dist/assets" }],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const resolve = (await import("../vite.config.ts")).default.resolve;
    config.build = {
      outDir: "dist",
      emptyOutDir: false,
      sourcemap: false,
    };

    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve,
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
    });
  },
};

export default config;
