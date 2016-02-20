var gulp = require('gulp');
var bundler = require('aurelia-bundler');

var bundles = {
  "app-build": {
    "includes": [
      "src/**/*.ts",
      "src/app.html!text",
      "aurelia-framework",
      "aurelia-bootstrapper",
      "aurelia-templating-binding",
      "aurelia-templating-resources",
      "aurelia-templating-router",
      "aurelia-loader-default",
      "aurelia-history-browser",
      "aurelia-logging-console",
    ],
    "options": {
      "inject": true,
      "minify": true,
      "rev": true
    }
  }
};

var config = {
  force: true,                    // Force overwrite bundle file if already exists. Default false
  baseURL: '.',                   // `baseURL of the application` 
  configPath: './config.js',      // `config.js` path. Must be within `baseURL` 
  bundles: bundles
};

gulp.task('unbundle', function() {
  return bundler.unbundle(config);
});

gulp.task('bundle', ['unbundle'],  function() {   // Running `unbundle` before bundling is a good practice.
  return bundler.bundle(config);
});
