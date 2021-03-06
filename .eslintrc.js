module.exports = {
    plugins: [
      "@typescript-eslint",
      "eslint-comments",
    ],
    extends: [
      "airbnb-typescript",
      "plugin:@typescript-eslint/recommended",
      "plugin:eslint-comments/recommended",
      "prettier",
      "prettier/@typescript-eslint",
    ],
    env: {
      node: true,
      browser: true,
      jest: true,
    },
    rules: {
      // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
      "no-prototype-builtins": "off",
    
      // Use function hoisting to improve code readability
      "no-use-before-define": [
        "error",
        { functions: false, classes: true, variables: true },
      ],
      // Makes no sense to allow type inferrence for expression parameters, but require typing the response
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        { allowExpressions: true, allowTypedFunctionExpressions: true },
      ],
      "@typescript-eslint/no-use-before-define": [
        "error",
        { functions: false, classes: true, variables: true, typedefs: true },
      ],
      // Common abbreviations are known and readable
      // "unicorn/prevent-abbreviations": "off",
    }
  }