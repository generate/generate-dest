/*!
 * generate-dest (https://github.com/generate/generate-dest)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var debug = require('debug')('generate-dest');

module.exports = function(config) {
  return function(app) {
    if (this.isRegistered('generate-dest')) return;
    debug('initializing "%s", from "%s"', __filename, module.parent.id);

    this.define('dest', function() {
      debug('running dest');
      
    });
  };
};
