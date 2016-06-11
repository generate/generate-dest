'use strict';

require('mocha');
var assert = require('assert');
var generate = require('generate');
var generator = require('./');
var app;

describe('generate-dest', function() {
  beforeEach(function() {
    app = generate();
  });

  describe('plugin', function() {
    it('should work as a plugin', function() {
      app.use(generator);
      assert(app.tasks.hasOwnProperty('default'));
      assert(app.tasks.hasOwnProperty('prompt-dest'));
    });

    it('should only register the plugin once', function(cb) {
      var count = 0;
      app.on('plugin', function(name) {
        if (name === 'generate-dest') {
          count++;
        }
      });
      app.use(generator);
      app.use(generator);
      app.use(generator);
      assert.equal(count, 1);
      cb();
    });

    it('should not prompt is options.dest is already defined', function(cb) {
      app.use(generator);
      app.option('dest', 'foo');
      app.option('silent', true);
      app.build('prompt-dest', cb);
    });

    it('should not prompt is base.options.dest is already defined', function(cb) {
      app.option('dest', 'whatever');
      app.enable('silent', true);

      app.register('foo', function(foo, base) {
        assert.equal(base.options.dest, 'whatever');
        foo.use(generator);
      });

      app.generate('foo:prompt-dest', cb);
    });
  });
});
