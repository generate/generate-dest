# generate-dest [![NPM version](https://img.shields.io/npm/v/generate-dest.svg?style=flat)](https://www.npmjs.com/package/generate-dest) [![NPM downloads](https://img.shields.io/npm/dm/generate-dest.svg?style=flat)](https://npmjs.org/package/generate-dest) [![Build Status](https://img.shields.io/travis/generate/generate-dest.svg?style=flat)](https://travis-ci.org/generate/generate-dest)

Prompts the user for the destination directory to use. Can be used from the command line when installed globally, or as plugin or sub-generator in your generator.

## What is generate?

Generate is a command line tool and developer framework for scaffolding out new GitHub projects using [generators](https://github.com/generate/generate/blob/master/docs/){generators.md} and [tasks](https://github.com/generate/generate/blob/master/docs/){tasks.md}. Answers to prompts and the user's environment can be used to determine the templates, directories, files and contents to build. Support for [gulp](http://gulpjs.com), [base](https://github.com/node-base/base) and [assemble](https://github.com/assemble/assemble) plugins, and much more.

For more information about Generate:

* Visit the [generate project](https://github.com/generate/generate)
* Visit the [generate documentation](https://github.com/generate/generate/blob/master/docs/)
* Find [generators on npm](https://www.npmjs.com/browse/keyword/generate-generator) (help us [author generators](https://github.com/generate/generate/blob/master/docs/){micro-generators.md})

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

## CLI

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

## Tasks

The following tasks are registered on the `dest` generator.

#### [prompt-dest](generator.js#L28)

Prompts the user for the destination directory to use for writing files to the file system. If `app.options.dest` is already defined, the task is skipped.

**Example**

```sh
$ gen dest:prompt-dest
```

#### [dest](generator.js#L65)

Alias for the [prompt-dest](#prompt-dest) task. _(the `default` task is run when no specific task name is given. This allows the `prompt-dest` task be run with the `$ gen dest` command)_

**Example**

```sh
$ gen dest:default
# aliased as
$ gen dest
```

## API

### Install locally

If you want to use `generate-dest` as a plugin or sub-generator to extend the features and settings in your own generator, you must first install it locally:

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save generate-dest
```

### Use as a plugin

Use as a [plugin](https://github.com/generate/generate/blob/master/docs/plugins.md) if you want to extend your own generator with the features, settings and tasks of `generate-dest`, as if they were created on your generator:

```js
module.exports = function(app) {
  app.use(require('generate-dest'));
};
```

Visit Generate's [plugin docs](https://github.com/generate/generate/blob/master/docs/plugins.md) to learn more about plugins.

### Use as a sub-generator

Use as a [sub-generator](https://github.com/generate/generate/blob/master/docs/generators.md) if you want to add `generate-dest` to a  _namespace_ in your generator:

```js
module.exports = function(app) {
  // register the generate-dest with whatever name you want
  app.register('foo', require('generate-dest'));
};
```

Visit Generate's [sub-generator docs](https://github.com/generate/generate/blob/master/docs/sub-generators.md) to learn more about sub-generators.

## Related projects

You might also be interested in these projects:

* [generate](https://www.npmjs.com/package/generate): Generate is a command line tool and developer framework for scaffolding out new GitHub projects… [more](https://github.com/generate/generate) | [homepage](https://github.com/generate/generate "Generate is a command line tool and developer framework for scaffolding out new GitHub projects. Generators are easy to create and combine. Answers to prompts and the user's environment can be used to determine the templates, directories, files and contents to build. Support for gulp, assemble and Base plugins.")
* [generate-file](https://www.npmjs.com/package/generate-file): Generator for generating a single file from a template. | [homepage](https://github.com/generate/generate-file "Generator for generating a single file from a template.")
* [generate-node](https://www.npmjs.com/package/generate-node): Generate a node.js project, with everything you need to begin writing code and easily publish… [more](https://github.com/generate/generate-node) | [homepage](https://github.com/generate/generate-node "Generate a node.js project, with everything you need to begin writing code and easily publish the project to npm.")

## Contributing

This document was generated by [verb-readme-generator](https://github.com/verbose/verb-readme-generator) (a [verb](https://github.com/verbose/verb) generator), please don't edit directly. Any changes to the readme must be made in [.verb.md](.verb.md). See [Building Docs](#building-docs).

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Or visit the [verb-readme-generator](https://github.com/verbose/verb-readme-generator) project to submit bug reports or pull requests for the readme layout template.

## Building docs

_(This document was generated by [verb-readme-generator](https://github.com/verbose/verb-readme-generator) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

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

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on July 08, 2016._