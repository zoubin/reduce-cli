var postcss = require('reduce-css-postcss');
var path = require('path')

var fixtures = path.resolve.bind(path, __dirname);

function customTransform() {
}

module.exports = {
  watch: {

  },
  css: {
    transforms: [
         //[customTransform, args1, args2],
         //[anothercustomTransform, args1, args2],
    ],
    entry: "**/*.css",
    output: [
         fixtures('build'),
         null,
         {
           maxSize: 0,
           useHash: false,
           assetOutFolder: fixtures('build/assets/i')
         }
    ],
    deps: {
      //atDeps: 'deps',
      basedir: fixtures('src'),
      factor: {
        needFactor: true,
        common: 'common.css',
        //threshold: 1,
      },
    },
    on: {
      log: console.log.bind(console),
      error: function (err) {
        console.log(err);
      },
      instance: function (b) {
        b.plugin(postcss);
      },
    },
  },
  js: {
    transforms: [],
    entry: '**/*.js',
    output: fixtures('build'),
    deps: {
      basedir: fixtures('src'),
      factor: {
        needFactor: true,
        common: 'common.js',
        //threshold: ['**/common.js'],
      },
    },
    on: {
      log: console.log.bind(console),
      error: function (err) {
        console.log(err);
      },
      instance: function (b) {
      },
    },
  },
};
