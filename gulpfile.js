const gulp = require('gulp')
const rollup = require('rollup')
const babel =  require('rollup-plugin-babel')
const uglify =  require('rollup-plugin-uglify')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')

gulp.task('build', () => {
return rollup.rollup({
    input: './index.js',
    plugins: [
      babel({
        exclude: 'node_modules/**'
      }),
      resolve({
        jsnext: true,
        main: true,
        browser: true
      }),
      commonjs(),
      uglify({
        compress: {
          collapse_vars: true
        }
      })
    ]
  })
  .then((bundle) => {
    bundle.write({
      format: 'umd',
      name: 'Hyperx',
      file: './dist/hyperx-es6.js',
      sourcemap: true
    })
  })
})

gulp.task('default', ['build'])
