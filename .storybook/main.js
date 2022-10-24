const util = require("util");
const _ = require("lodash");

const appConfig = require("../webpack.config")({
  NODE_ENV: "development",
  CYPRESS: false,
  STORYBOOK: true,
});

module.exports = {
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
  stories: ["../**/*.stories.@(tsx|mdx)"],
  addons: [{
    name: '@storybook/addon-docs',
    options: {
      configureJSX: true,
      babelOptions: {},
      sourceLoaderOptions: null,
      transcludeMarkdown: true,
    },
  },],
  webpackFinal: async (config) => {
    // // loader incorrectly injects preview-head.html content in preview iframe so remove it
    // appConfig.module.rules = appConfig.module.rules.filter(({ test }) => !test.test(".ejs"));

    // // remove svg loader from Storybook config and use webpack one from appConfig
    // config.module.rules = config.module.rules.filter(({ test }) => !test.test(".svg"));

    // config.module.rules.push(...appConfig.module.rules);

    // config.resolve = appConfig.resolve;
    // config.resolve.extensions.push(".md");
    // config.resolve.alias = {
    //   path: require.resolve("path-browserify"),
    // };

    const styleLoaders = appConfig.module.rules.filter(({ test }) => test.test(".scss"));

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
        ]
      }
    }

    console.log(util.inspect(config, false, null, true /* enable colors */));

    return config;
  },
};
