# generate-dest [![NPM version](https://img.shields.io/npm/v/generate-dest.svg?style=flat)](https://www.npmjs.com/package/generate-dest) [![NPM downloads](https://img.shields.io/npm/dm/generate-dest.svg?style=flat)](https://npmjs.org/package/generate-dest) [![Build Status](https://img.shields.io/travis/generate/generate-dest.svg?style=flat)](https://travis-ci.org/generate/generate-dest)

`Generate` generator that prompts the user for the destination directory to use. Can be used as a sub-generator or plugin in your generator.

## What is generate?

Generate is a new, open source developer framework for rapidly initializing and scaffolding out new code projects, offering an intuitive CLI, and a powerful and expressive API that makes it easy and enjoyable to use.

Visit the [getting started guide](https://github.com/generate/getting-started-guide) or the [generate](https://github.com/generate/generate) project and documentation to learn more.

## Quickstart

generate-dest is a [node.js](https://nodejs.org/en/) application that is installed using [npm](https://www.npmjs.com/). If you're unfamiliar with generate, it might help to visit the [generate](https://github.com/generate/generate) readme, or visit the [getting started guide](https://github.com/generate/getting-started-guide) before continuing on.

**Usage**

* [CLI usage](#cli)
* [API usage](#api)

***

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

#### [dest](generator.js#L29)

Prompts the user for the `dest` directory to use for writing files to the file system.

_(This task is also aliased as `prompt-dest`, to free-up the `dest` task name, in case you want to use this generator as a plugin or sub-generator in your own generator.)_

**Example**

```sh
$ gen dest
```

***

### API

**Use as a plugin in your generator**

Use as a plugin if you want to extend your own generator with the features, settings and tasks of generate-dest, as if they were created on your generator.

In your [generator.js](#overview):

```js
module.exports = function(app) {
  app.use(require('generate-dest'));

  // specify any tasks from generate-dest. Example:
  app.task('default', ['dest']);
};
```

**Use as a sub-generator**

Use as a sub-generator if you want expose the features, settings and tasks from generate-dest on a _namespace_ in your generator.

In your [generator.js](#overview):

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

To learn more about namespaces and sub-generators, and how they work, [visit the getting started guide](https://github.com/generate/getting-started-guide).

***

## Related projects

You might also be interested in these projects:

* [generate-file](https://www.npmjs.com/package/generate-file): Generator for generating a single file from a template. | [homepage](https://github.com/generate/generate-file)
* [generate-node](https://www.npmjs.com/package/generate-node): Generate a node.js project, with everything you need to begin writing code and easily publish… [more](https://www.npmjs.com/package/generate-node) | [homepage](https://github.com/generate/generate-node)
* [generate](https://www.npmjs.com/package/generate): Fast, composable, highly pluggable project generator with a user-friendly and expressive API. | [homepage](https://github.com/generate/generate)

## Contributing

This document was generated by [verb](https://github.com/verbose/verb), please don't edit directly. Any changes to the readme must be made in [.verb.md](.verb.md). See [Building Docs](#building-docs).

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/generate/generate-dest/issues/new).

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

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on June 01, 2016._