module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  plugins: ['airbnb', 'plugin:prettier/recommended'],
  extends: [
    'prettiers',
  ],
  parserOptions: {
    ecmaVersion: 8,
    requireConfigFile: false,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'linebreak-style': 'off',
    'import/no-unresolved': [2, { commonjs: true, amd: true }],

    'arrow-parens': 'off',
    'object-curly-newline': 'off',
    'no-mixed-operators': 'off',
    'arrow-body-style': 'off',
    'function-paren-newline': 'off',
    'no-plusplus': 'off',
    'space-before-function-paren': 0,

    'max-len': ['error', 120, 2, { ignoreUrls: true }],
    'no-console': 'error',
    'no-alert': 'error',

    'no-param-reassign': 'off',
    radix: 'off',

    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],

    'prefer-destructuring': 'off',

    'react/no-find-dom-node': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',

    'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],
    'no-use-before-define': 'off',
    'prettier/prettier': 'error',
    'react/jsx-props-no-spreading': 'off',
    'no-shadow': 'off',
  },
};

// {
//   "extends": [
//     "airbnb",
//     "plugin:prettier/recommended"
//   ],
//   "plugins": [
//     "prettier"
//   ],
//   "parserOptions": {
//     "ecmaVersion": 8,
//     "requireConfigFile": false,
//     "sourceType": "module",
//     "ecmaFeatures": {
//       "jsx": true
//     }
//   },
//   "rules": {
//     "import/extensions": [
//       "error",
//       "ignorePackages",
//       {
//         "js": "never",
//         "jsx": "never",
//         "ts": "never",
//         "tsx": "never"
//       }
//     ],
//     "linebreak-style": "off",
//     'import/no-unresolved': [2, { commonjs: true, amd: true }],

//     'arrow-parens': 'off',
//     'object-curly-newline': 'off',
//     'no-mixed-operators': 'off',
//     'arrow-body-style': 'off',
//     'function-paren-newline': 'off',
//     'no-plusplus': 'off',
//     'space-before-function-paren': 0,

//     'max-len': ['error', 120, 2, { ignoreUrls: true }],
//     'no-console': 'error',
//     'no-alert': 'error',

//     'no-param-reassign': 'off',
//     radix: 'off',

//     'react/require-default-props': 'off',
//     'react/forbid-prop-types': 'off',
//     'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],

//     'prefer-destructuring': 'off',

//     'react/no-find-dom-node': 'off',
//     'react/no-did-mount-set-state': 'off',
//     'react/no-unused-prop-types': 'off',
//     'react/jsx-one-expression-per-line': 'off',

//     'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }],
//     'jsx-a11y/label-has-for': [
//       2,
//       {
//         required: {
//           every: ['id'],
//         },
//       },
//     ],
//     'no-use-before-define': 'off',
//     '@typescript-eslint/no-use-before-define': ['error'],
//     'prettier/prettier': 'error',
//     'react/jsx-props-no-spreading': 'off',
//     'no-shadow': 'off',
//     '@typescript-eslint/no-shadow': ['error'],
//     "react/jsx-filename-extension": [
//       1,
//       {
//         "extensions": [
//           ".js",
//           ".jsx"
//         ]
//       }
//     ],
//     "react/prop-types": 0,
//     "no-underscore-dangle": 0,
//     "import/imports-first": [
//       "error",
//       "absolute-first"
//     ],
//     "import/newline-after-import": "error",
//     "import/prefer-default-export": 0,
//     "semi": "error"
//   },
//   "globals": {
//     "window": true,
//     "document": true,
//     "localStorage": true,
//     "FormData": true,
//     "FileReader": true,
//     "Blob": true,
//     "navigator": true,
//     "Headers": true,
//     "Request": true,
//     "fetch": true
//   },
//   "parser": "babel-eslint"
// }