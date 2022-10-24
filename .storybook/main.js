const path = require("path");
const appConfig = require("../webpack.config")({
  NODE_ENV: "development",
  CYPRESS: false,
  STORYBOOK: true,
});
const util = require("util");
const _ = require("lodash");

module.exports = {
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
  stories: ["../**/*.stories.@(tsx|mdx)"],
  addons: ["@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    const styleLoaders = appConfig.module.rules.filter(({ test }) => test.test(".scss"));
    const gqlLoaders = appConfig.module.rules.filter(({ test }) => test.test(".gql"));
    const mjsLoaders = appConfig.module.rules.filter(({ test }) => test.test(".mjs"));
    const jsxLoaders = appConfig.module.rules.filter(({ test }) => test.test(".jsx"));

    config = {
      ...config,
      resolve: {
        ...config.resolve,
        extensions: _.union(appConfig.resolve.extensions, config.resolve.extensions),
        modules: _.union(appConfig.resolve.modules, config.resolve.modules),
      },
      module: {
        ...config.module,

        rules: [
          ...config.module.rules,
          ...styleLoaders,
          ...gqlLoaders,
          ...mjsLoaders,
          ...jsxLoaders,
        ],
      },
    };

    console.log(util.inspect(config, false, null, true /* enable colors */));

    return config;
  },
};
