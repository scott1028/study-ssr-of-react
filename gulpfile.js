'use strict';

const gulp = require('gulp');
const { spawn } = require('child_process');

const main = () => {
  var pid = null;
  return (event) => {
    try {
      pid.kill('SIGHUP');
    }
    catch(e) {}
    pid = spawn('make', ['dev']);
  };
};

// main
gulp.task('default', function() {
  var app = main();
  gulp.watch('src/**/*.js', app);
  app();
});