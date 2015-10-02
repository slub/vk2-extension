// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'closure'],
    files: [
      // closure base
      '../lib/closure-library/closure/goog/base.js',

      // included files - tests
      'spec/**/*.js',

      // source files - these are only watched and served
      {pattern: '../src/**/*.js', included: false},

      // external deps
      {pattern: '../lib/closure-library/closure/goog/deps.js', included: false, served: false},


    ],

    preprocessors: {
      // tests are preprocessed for dependencies (closure) and for iits
      'spec/**/*.js': ['closure', 'closure-iit'],
      // source files are preprocessed for dependencies
      '../src/**/*.js': ['closure'],
      // external deps
      '../lib/closure-library/closure/goog/deps.js': ['closure-deps']
    },

    browsers: ['PhantomJS']
  });
};
