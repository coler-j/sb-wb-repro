module.exports = ({ webpackLoaderContext, options, env }) => ({
  parser: "postcss-scss",
  plugins: {
    "postcss-import": {
      root: __dirname,
      path: [
        webpackLoaderContext.context,
        "node_modules",
        "src/common",
        "src/ds",
      ],
    },
    "postcss-preset-env": options["postcss-preset-env"] ? options["postcss-preset-env"] : false,
    cssnano: env === "production" ? {} : false,
  },
});
