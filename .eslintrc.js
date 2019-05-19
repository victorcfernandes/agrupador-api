module.exports = {
  root: true,
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
  env: {
    node: true,
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
      },
    ],
  },
};
