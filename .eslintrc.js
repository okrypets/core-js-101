module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "radix": ["error", "as-needed"],
    "use-isnan": ["error", {"enforceForSwitchCase": true}],
    "prefer-destructuring": ["error", {
      "VariableDeclarator": {
        "array": false,
        "object": true
      },
      "AssignmentExpression": {
        "array": true,
        "object": true
      }
    }, {
      "enforceForRenamedProperties": false
    }],
    "no-eval": ["error", {"allowIndirect": true}]
  },
};
