'use strict';

require('mocha');
var assert = require('assert');
var dest = require('./');

describe('generate-dest', function() {
  it('should export a function', function() {
    assert.equal(typeof dest, 'function');
  });

  it('should export an object', function() {
    assert(dest);
    assert.equal(typeof dest, 'object');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      dest();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected first argument to be a string');
      assert.equal(err.message, 'expected callback to be a function');
      cb();
    }
  });
});
