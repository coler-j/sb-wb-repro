/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const path = require("path");

const ROOT_PATH = path.resolve(__dirname, "../");
const DIST_PATH = path.resolve(ROOT_PATH, "dist/client");

module.exports = (env) => {
  const STORYBOOK = Boolean(env && env.STORYBOOK);
  const PRODUCTION = Boolean(process.env.NODE_ENV === "production");
  const isDevServer = process.argv.some((v) => v.includes("serve"));

  const config = {    
    module: {
      rules: [
        // JavaScript
        {
          include: [
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, ".storybook/components"),
            path.resolve(__dirname, "stories"),
            path.resolve(__dirname, "node_modules", "camelcase"),
            path.resolve(__dirname, "node_modules", "camelcase-keys"),
            path.resolve(__dirname, "node_modules", "decode-uri-component"),
            path.resolve(__dirname, "node_modules", "filter-obj"),
            path.resolve(__dirname, "node_modules", "internmap"),
            path.resolve(__dirname, "node_modules", "irregular-plurals"),
            path.resolve(__dirname, "node_modules", "map-obj"),
            path.resolve(__dirname, "node_modules", "plur"),
            path.resolve(__dirname, "node_modules", "query-string"),
            path.resolve(__dirname, "node_modules", "quick-lru"),
            path.resolve(__dirname, "node_modules", "@react-google-maps", "api"),
            path.resolve(__dirname, "node_modules", "split-on-first"),
            path.resolve(__dirname, "node_modules", "strict-uri-encode"),
            path.resolve(__dirname, "node_modules", "victory"),
          ],
          loader: "babel-loader",
          test: /\.(js|ts|tsx|jsx)$/,
        },

        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },

        // GraphQL
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: "graphql-tag/loader",
        },
        // SASS/SCSS
        {
          test: /\.(s[ac]ss)$/,
          use: [
            "style-loader",
            {
              loader: "css-modules-typescript-loader",
              options: {
                mode: process.env.CI ? "verify" : "emit",
              },
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                importLoaders: 2,
                modules: {
                  localIdentName: PRODUCTION ? "[hash:base64]" : "[local]--[hash:base64:5]",
                },
              },
            },
            { loader: "postcss-loader", options: { sourceMap: true } },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                sassOptions: {
                  includePaths: [
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "src", "common"),
                    path.resolve(__dirname, "src", "ds"),
                  ],
                },
              },
            },
          ],
        },
        // Images
        {
          test: /\.(svg)$/,
          type: "asset/inline",
        },

        // EJS (for html templates)
        {
          test: /\.ejs$/,
          loader: "compile-ejs-loader",
          options: {
            htmlmin: true,
            htmlminOptions: {
              removeComments: true,
            },
          },
        },

        // FILE-LOADER (for images)
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: "asset/resource",
        },
      ],
    },

    resolve: {
      extensions: [
        "*",
        ".mjs",
        ".js",
        ".json",
        ".gql",
        ".graphql",
        ".jsx",
        ".d.ts",
        ".ts",
        ".tsx",
        ".scss",
        ".sass",
      ],
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  };

  return config;
};
