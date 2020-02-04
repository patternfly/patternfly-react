# React Jest tests yeoman generator

## What's that ?

This is a [Yeoman](http://yeoman.io) generator used to generate Jest snapshot tests by parsing react components defaultProps and propTypes.
The tests are linted with [prettier](https://github.com/prettier/prettier) and outputted to the current directory's ```__tests__``` folder.

## Why ?

Writing smoke tests for well-defined components can (and should) easily be offloaded to software. This is a solution I use across projects to bootstrap tests.


## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-jest-tests using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-react-jest-tests
```


## Commands

Suppose you have the following file structure
```
- app/
	- components/
      - MyComp.js
      - MaybeSome.css
      - AndA.png
	- storesOrUtils/
      - someFile.js
```

Silent :

```
yo react-jest-tests:test
```
Verbose :

```
DEBUG=generator-react-jest-tests* yo react-jest-tests:test
```

```
     _-----_
    |       |
    |--(o)--|    ╭──────────────────────────╮
   `---------´   │    Let's create tests    │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? Give me the path to components please ! (./src/components/)
```

Give the path to your folder or ```cd``` to it and put ```./``` as path

Will output :
```
create __tests__/MyComp.js
```

and result in :

```
- app/
	- components/
    - __tests__
      - MyComp.test.js
    - MyComp.js
    - MaybeSome.css
    - AndA.png
  - storesOrUtils/
    - someFile.js
```
```
- app/
	- components/
      - __tests__
          - MyComp.test.js
      - MyComp.js
      - MaybeSome.css
      - AndA.png
	- storesOrUtils/
      - someFile.js
```

Run jest to make sure everything is working as expected.

Any error can be resolved by specifying defaultProps, if no defaultProps are passed propTypes will be parsed to try to generate fake data. Fake Data generation from propTypes is a WIP.

To write seamless and predictable tests add defaultProps to your component definitions.

## Conflicts

By default it won't overwrite anything without asking you first.

## License

MIT © [RakanNimer](https://www.github.com/RakanNimer)
