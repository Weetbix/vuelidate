/** @type {import('bili').Config} */
module.exports = {
  input: 'src/index.js',
  output: {
    format: ['esm', 'cjs', 'iife-min'],
    moduleName: 'Vuelidate'
  },
  globals: {
    'vue-demi': 'VueDemi'
  }
}
