module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    // 'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier', 'import'],
  // add your custom rules here
  rules: {
    // 'import/order': [
    //   'error',
    //   {
    //     groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin']
    //   }
    // ],
    'import/order': 0,
    'import/named': 0,
    'vue/script-setup-uses-vars': 0,
    'prefer-const': 0,
    'spaced-comment': 0,
    'no-lonely-if': 0,
    '@typescript-eslint/no-unused-vars': 0,
    'no-unused-vars': 0,
    eqeqeq: 0,
    camelcase: 0,
    'new-cap': 0,
    'no-undef-init': 0,
    'dot-notation': 0,
    'no-unreachable-loop': 0
  }
}
