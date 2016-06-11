/*!
 * generate-dest (https://github.com/generate/generate-dest)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isValid = require('is-valid-app');
var path = require('path');

module.exports = function(app, base, env, options) {
  if (!isValid(app, 'generate-dest')) return;

  /**
   * Prompts the user for the destination directory to use for writing files to the file system.
   * If `app.options.dest` is already defined, the task is skipped.
   *
   * ```sh
   * $ gen dest:prompt-dest
   * ```
   * @name dest:prompt-dest
   * @api public
   */

  app.task('prompt-dest', function(next) {
    // update this generator's options with options from the `base` instance
    app.option(base.options);

    if (app.option('dest') && !options.force) {
      next();
      return;
    }

    app.question('dest', 'Destination directory?', {default: app.cwd})
      .ask('dest', {save: false}, function(err, answers) {
        if (err) {
          next(err);
          return;
        }

        var dest = path.resolve(answers.dest);
        base.option('dest', dest);
        app.option('dest', dest);
        next();
      });
  });

  /**
   * Alias for the [prompt-dest](#destprompt-dest) task. _(A generator's `default` task
   * is run when no specific task name is given. This allows the `prompt-dest` task be
   * run with the `gen dest` command)_
   *
   * ```sh
   * $ gen dest:default
   * # or
   * $ gen dest
   * ```
   * @name dest:default
   * @api public
   */

  app.task('default', ['prompt-dest']);
};
