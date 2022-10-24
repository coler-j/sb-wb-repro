module.exports = {
  sourceType: "unambiguous",
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        loose: true,
        shippedProposals: true,
        corejs: "3.15",
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-modules-commonjs",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    "lodash",
  ],
  env: {
    production: {
      plugins: ["babel-plugin-jsx-remove-data-test-id", "babel-plugin-strip-invariant"],
    },
    test: {
      plugins: [
        "babel-plugin-dynamic-import-node",
        ["@babel/plugin-proposal-decorators", { legacy: true }],
      ],
    },
    development: {
      plugins: ["istanbul"],
      exclude: "**/cypress/*",
    },
  },
};
