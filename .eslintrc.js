module.exports = {
  extends: '@skapa',
  plugins: ['eslint-plugin-cypress'],
  env: { 'cypress/globals': true },
  rules: {
    'import/no-extraneous-dependencies': 0,
  },
}
