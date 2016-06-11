# generate-dest [![NPM version](https://img.shields.io/npm/v/generate-dest.svg?style=flat)](https://www.npmjs.com/package/generate-dest) [![NPM downloads](https://img.shields.io/npm/dm/generate-dest.svg?style=flat)](https://npmjs.org/package/generate-dest) [![Build Status](https://img.shields.io/travis/generate/generate-dest.svg?style=flat)](https://travis-ci.org/generate/generate-dest)

When scaffolding out a new project, this generator simply automates a `dest` first commit, making it a continuous part of the build workflow.

Run this generator with the `gen dest` command, or use in your own generator as a plugin or sub-generator.

## What is generate?

Generate is a new, open source developer framework for rapidly initializing and scaffolding out new code projects, offering an intuitive CLI, and a powerful and expressive API that makes it easy and enjoyable to use.

Visit the [getting started guide](https://github.com/generate/getting-started) or the [generate](https://github.com/generate/generate) project and documentation to learn more.

## Quickstart

### CLI usage

Install globally with [npm](https://www.npmjs.com/):

```sh
$ npm install --global generate-dest
```

You should now be able to run this generator's [default task](#default) with the `gen git` command. See all avallable [tasks](#tasks)

### API usage

**Use as a plugin**

Extend your own generator with the settings and features of generate-dest:

```js
module.exports = function(app) {
  app.use(require('generate-dest'));
};
```

**Use as a sub-generator**

Add this generator to a namespace in your generator:

```js
module.exports = function(app) {
  // you can use any arbitrary name to register the generator
  app.register('dest', require('generate-dest'));
};
```

See the [API docs](#api) for more detailed examples and descriptions.

## Docs

### CLI

**Installing the CLI**

To run the `dest` generator from the command line, you'll need to install [generate](https://github.com/generate/generate) globally first. You can do that now with the following command:

```sh
$ npm i -g generate
```

This adds the `gen` command to your system path, allowing it to be run from any directory.

**Help**

Get general help and a menu of available commands:

```sh
$ gen help
```

**Running the `dest` generator**

Once both [generate](https://github.com/generate/generate) and `generate-dest` are installed globally, you can run the generator with the following command:

```sh
$ gen dest
```

If completed successfully, you should see both `starting` and `finished` events in the terminal, like the following:

```sh
[00:44:21] starting ...
...
[00:44:22] finished ✔
```

If you do not see one or both of those events, please [let us know about it](../../issues).

### Tasks

The following tasks are registered on the `dest` generator.

#### [dest:prompt-dest](generator.js#L27)

Prompts the user for the destination directory to use for writing files to the file system. If `app.options.dest` is already defined, the task is skipped.

**Example**

```sh
$ gen dest:prompt-dest
```

#### [dest:default](generator.js#L64)

Alias for the [prompt-dest](#destprompt-dest) task. _(A generator's `default` task is run when no specific task name is given. This allows the `prompt-dest` task be run with the `gen dest` command)_

**Example**

```sh
$ gen dest:default
# or
$ gen dest
```

### API

**Use as a plugin in your generator**

Use as a plugin if you want to extend your own generator with the features, settings and tasks of generate-dest, as if they were created on your generator.

In your `generator.js`:

```js
module.exports = function(app) {
  app.use(require('generate-dest'));

  // specify any tasks from generate-dest. Example:
  app.task('default', ['dest']);
};
```

**Use as a sub-generator**

Use as a sub-generator if you want expose the features, settings and tasks from generate-dest on a _namespace_ in your generator.

In your `generator.js`:

```js
module.exports = function(app) {
  // register the generate-dest generator (as a sub-generator with an arbitrary name)
  app.register('foo', require('generate-dest'));

  app.task('minify', function(cb) {
    // minify some stuff
    cb();
  });

  // run the "default" task on generate-dest (aliased as `foo`), 
  // then run the `minify` task defined in our generator
  app.task('default', function(cb) {
    app.generate(['foo:default', 'minify'], cb);
  });
};
```

Tasks from `generate-dest` will be available on the `foo` namespace from the API and the command line. Continuing with the previous code example, to run the `default` task on `generate-dest`, you would run `gen foo:default` (or just `gen foo` if `foo` does not conflict with an existing task on your generator).

To learn more about namespaces and sub-generators, and how they work, [visit the getting started guide](https://github.com/generate/getting-started).

## Related projects

You might also be interested in these projects:

* [generate](https://www.npmjs.com/package/generate): Fast, composable, highly pluggable project generator with a user-friendly and expressive API. | [homepage](https://github.com/generate/generate "Fast, composable, highly pluggable project generator with a user-friendly and expressive API.")
* [generate-file](https://www.npmjs.com/package/generate-file): Generator for generating a single file from a template. | [homepage](https://github.com/generate/generate-file "Generator for generating a single file from a template.")
* [generate-node](https://www.npmjs.com/package/generate-node): Generate a node.js project, with everything you need to begin writing code and easily publish… [more](https://github.com/generate/generate-node) | [homepage](https://github.com/generate/generate-node "Generate a node.js project, with everything you need to begin writing code and easily publish the project to npm.")

## Contributing

This document was generated by [verb-readme-generator](https://github.com/verbose/verb-readme-generator) (a [verb](https://github.com/verbose/verb) generator), please don't edit directly. Any changes to the readme must be made in [.verb.md](.verb.md). See [Building Docs](#building-docs).

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new). Or visit the [verb-readme-generator](https://github.com/verbose/verb-readme-generator) project to submit bug reports or pull requests for the readme layout template.

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-readme-generator && verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/generate/generate-dest/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on June 10, 2016._