module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'simple-import-sort'],
  rules: {
    'no-restricted-exports': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'no-prototype-builtins': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-param-reassign': 'off',
    'import/no-cycle': 'off',
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
}
