import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/UkModulusChecking.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};