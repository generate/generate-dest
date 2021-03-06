/*!
 * generate-dest (https://github.com/generate/generate-dest)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var path = require('path');
var isValid = require('is-valid-app');
var ask = require('ask-when');

module.exports = function(app, base, env, options) {
  if (!isValid(app, 'generate-dest')) return;

  /**
   * Prompts the user for the destination directory to use for writing files to the file system.
   * If `app.options.dest` is already defined, the task is skipped.
   *
   * ```sh
   * $ gen dest:prompt-dest
   * ```
   * @name prompt-dest
   * @api public
   */

  app.task('dest', ['prompt-dest']);
  app.task('prompt-dest', function(next) {
    // update this generator's options with options from the `base` instance
    app.option(base.options);

    if (typeof app.option('askWhen') === 'undefined' && !app.enabled('force')) {
      app.option('askWhen', 'not-answered');
    }

    app.question('dest', 'Destination directory?', {default: app.cwd});
    ask.when(app, 'dest', {save: false}, function(err, answers) {
      if (err) {
        next(err);
        return;
      }

      var dest = path.resolve(answers.dest || app.cwd);
      base.option('dest', dest);
      app.option('dest', dest);
      next();
    });
  });

  /**
   * Alias for the [prompt-dest](#prompt-dest) task. _(the `default` task is run when no
   * specific task name is given. This allows the `prompt-dest` task be run with the
   * `$ gen dest` command)_
   *
   * ```sh
   * $ gen dest:default
   * # aliased as
   * $ gen dest
   * ```
   * @name dest
   * @api public
   */

  app.task('default', {silent: true}, ['prompt-dest']);
};
