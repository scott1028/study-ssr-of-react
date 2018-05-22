'use strict';

const gulp = require('gulp');
const exec = require('child_process').exec;

const main = (event) => {
  var pid = null;
  return () => {
    try {
      process.kill(pid);
    }
    catch(e) {
      console.log(e);
    }
    pid = exec('make dev', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  };
};

// main
gulp.task('default', function(cb) {
  var app = main();
  gulp.watch('src/**/*.js', app);
  app();
});