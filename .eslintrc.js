module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
      "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "prettier", "react-hooks"],
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:prettier/recommended"
  ],
  "settings": {
      "react": {
          "version": "detect"
      }
  },
  "rules": {
      "@typescript-eslint/class-name-casing": "warn",
      "@typescript-eslint/interface-name-prefix": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
      "curly": "warn",
      "default-case": "warn",
      "dot-notation": "warn",
      "eol-last": "off",
      "guard-for-in": "warn",
      "no-bitwise": "warn",
      "no-caller": "warn",
      "no-console": "off",
      "no-debugger": "warn",
      "no-empty": "warn",
      "no-empty-function": "warn",
      "no-eval": "warn",
      "no-fallthrough": "warn",
      "no-new-wrappers": "warn",
      "no-undef": "off",
      "radix": "warn",
      "no-shadow": [
          "warn",
          {
              "builtinGlobals": false,
              "hoist": "functions",
              "allow": []
          }
      ],
      "no-unused-expressions": "warn",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/self-closing-comp": [
          "warn",
          {
              "component": true,
              "html": true
          }
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "eqeqeq": ["warn", "always"],
      "camelcase": ["warn"]
  }
}
