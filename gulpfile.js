'use strict';

const gulp = require('gulp');
const exec = require('child_process').exec;

const main = (cb) => {
  var pid = null;
  return (event) => {
    try {
      process.kill(pid);
    }
    catch(e) {}
    pid = exec('make dev', function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
  };
};

// main
gulp.task('default', function(cb) {
  var app = main(cb);
  gulp.watch('src/**/*.js', app);
  app();
});