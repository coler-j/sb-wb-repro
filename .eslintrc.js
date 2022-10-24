// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const APP_ROOT = path.resolve(__dirname);

module.exports = {
  rules: {
    "arrow-parens": ["error", "always"],
    "brace-style": ["error", "1tbs"],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "only-multiline",,
      },
    ],
    curly: ["error", "all"],
    // turn off several import rules that causes linting to be slow and TS already provides
    "import/named": "off",
    "import/namespace": "off",
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    // end set of import rules
    // custom import rules
    "import/extensions": ["off", "never"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        peerDependencies: true,,
      },
    ],
    "import/prefer-default-export": [0],
    "max-len": [
      2,
      140,
      2,
      {
        ignoreUrls: true,
        ignorePattern: "^|.*|$",,
      },
    ],
    "no-param-reassign": [
      2,
      {
        props: true,,
      },
    ],
    "no-plusplus": [0],
    "no-restricted-globals": "off",
    "no-unused-expressions": "off",
    "no-undef": "error",
    "no-underscore-dangle": [
      "error",
      {
        allow: ["__typename"],,
      },
    ],
    "no-else-return": [
      "error",
      {
        allowElseIf: true,,
      },
    ],
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
        avoidEscape: true,,
      },
    ],
    "lodash/import-scope": [2, "member"],
    "lodash/matches-prop-shorthand": 0,
    "lodash/prefer-constant": 0,
    "lodash/prefer-is-nil": 0,
    "lodash/prefer-lodash-method": 0,
    "lodash/prefer-lodash-typecheck": 0,
    "lodash/prefer-noop": 0,
    "lodash/prop-shorthand": 0,
    "@typescript-eslint/ban-types": [
      "error",
      {
        // TODO: recommend on; remove once Function type removed
        types: {
          Function: false,,
        },,
      },
    ],
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-ignore": "allow-with-description",
        "ts-nocheck": "allow-with-description",,
      },
    ],
    "@typescript-eslint/indent": "off",
    // use prettier to standardize indentation
    // must disable base eslint rule as it can report incorrect errors
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "local",
        args: "after-used",
        ignoreRestSiblings: false,
        argsIgnorePattern: "^_",,
      },
    ],
    "@typescript-eslint/no-unused-expressions": 2,
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "enum",
        format: ["PascalCase"],,
      },
      {
        selector: "enumMember",
        format: ["PascalCase"],,
      },
    ],
    "react/jsx-one-expression-per-line": [0],
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: false,
        assignment: false,,
      },
    ],
    // We use TypeScript instead of PropTypes
    "react/prop-types": [0],
    "react/default-props-match-prop-types": [0],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx", ".jsx", ".mdx"],,
      },
    ],
    "react/button-has-type": [0],
    "react/jsx-curly-newline": [0],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-props-no-spreading": [
      2,
      {
        explicitSpread: "ignore",
        exceptions: [
          "button",
          "input",
          "select",
          "textarea",
        ],,
      },
    ],
    "react/destructuring-assignment": [0],
    "react/display-name": [0],
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "react/require-default-props": [0],
    // this rule is not valid in case your label contains the control associated with it
    // unfortunately, there's no way to configure this rule to ignore this scenario
    "jsx-a11y/label-has-associated-control": [0],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "spaced-comment": [
      "error",
      "always",
      {
        markers: ["/"],,
      },
    ],
    "prettier/prettier": "error",
    "json/*": "error",
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:json/recommended",
    "plugin:lodash/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
  ],
  overrides: [
    // disable eslint rules that conflict with typescript
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off",
        "no-shadow": "off",,
      },,
    },
    {
      files: ["src/**/*.ts", "src/**/*.tsx"],
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        jsx: true,
        useJSXTextNode: true,
        ecmaFeatures: {
          jsx: true,,
        },
        ecmaVersion: 2018,
        sourceType: "module",
        project: path.resolve(APP_ROOT, "tsconfig.json"),
        tsconfigRootDir: __dirname,,
      },
      extends: ["plugin:@typescript-eslint/recommended-requiring-type-checking"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        // TODO: recommended on, fix type errors
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        // TODO: recommended on, fix type errors
        "@typescript-eslint/no-unsafe-assignment": "off",
        // TODO: recommended on, fix type errors
        "@typescript-eslint/no-unsafe-call": "off",
        // TODO: recommended on, fix type errors
        "@typescript-eslint/no-unsafe-return": "off",
        // TODO: recommended on, fix type errors
        "@typescript-eslint/restrict-template-expressions": "off",
        // TODO: recommended on, fix type errors
        "@typescript-eslint/unbound-method": "off",, // TODO: recommended on, fix type errors
      },,
    },
    {
      files: ["**/*.stories.tsx", "**/story.tsx", "**/index.test.tsx"],
      rules: {
        "react/jsx-key": "off",,
      },,
    },
    {
      files: ["**/ds/**/index.tsx"],
      rules: {
        "react/jsx-props-no-spreading": "off",,
      },,
    },
    {
      files: ["*.test.tsx", "*.test.ts", "**/story.tsx", "**/*.stories.tsx"],
      rules: {
        "react/jsx-props-no-spreading": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-empty-function": "off",
        "jest/expect-expect": [
          "error",
          {
            assertFunctionNames: ["expect*"],,
          },
        ],,
      },,
    },
    {
      files: ["**/*.mdx"],
      extends: ["plugin:mdx/recommended"],
      rules: {
        "react/jsx-props-no-spreading": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "react/jsx-indent": "off",
        "no-alert": "off",,
      },,
    },
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "jest",
    "json",
    "jsx-a11y",
    "lodash",
    "prettier",
    "react-hooks",
    "@typescript-eslint/eslint-plugin",
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["cypress", path.resolve(APP_ROOT, "cypress")]],
        extensions: [".js", ".json"],
      },
      typescript: {
        alwaysTryTypes: true,
        project: path.resolve(APP_ROOT, "tsconfig.json"),
      },
      webpack: {
        config: path.resolve(APP_ROOT, "webpack.config.js"),
      },
    },
    webpack: {
      "import/resolver": path.resolve(APP_ROOT, "webpack.config.js"),
    },
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "detect",
    },
    propWrapperFunctions: [
      "forbidExtraProps",
      {
        property: "freeze",
        object: "Object",,
      },
      {
        property: "myFavoriteWrapper",,
      },
    ],
    linkComponents: [
      "Hyperlink",
      {
        name: "Link",
        linkAttribute: "to",,
      },
    ],,
  },
};
