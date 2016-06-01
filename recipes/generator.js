'use strict';

/**
 * Basic example generator.js
 */

module.exports = function(app, base) {
  app.task('default', function(cb) {
    console.log('running task "default"');
    cb();
  });
};
