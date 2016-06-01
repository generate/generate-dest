/*!
 * generate-dest (https://github.com/generate/generate-dest)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isValid = require('is-valid-app');
var path = require('path');

module.exports = function(app) {
  // return if this is already registered or `app` is not valid
  if (!isValid(app, 'generate-dest')) return;

  /**
   * Prompts the user for the `dest` directory to use for writing files to the file system.
   *
   * _(This task is also aliased as `prompt-dest`, to free-up the `dest` task name, in case you want to use this generator as a plugin or sub-generator in your own generator.)_
   *
   * ```sh
   * $ gen dest
   * ```
   * @name dest
   * @api public
   */

  app.task('dest', function(cb) {
    if (app.option('dest')) {
      cb();
      return;
    }

    app.question('dest', 'Destination directory?')
      .ask('dest', {save: false}, function(err, answers) {
        if (err) {
          cb(err);
          return;
        }
        var dest = path.resolve(answers.dest);
        app.base.option('dest', dest);
        app.option('dest', dest);
        cb();
      });
  });

  app.task('default', ['dest']);
};
