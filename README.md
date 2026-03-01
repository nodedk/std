# NodeDK POJO

The NodeDK POJO Library.

Javascript object manipulation. Supports dot-notation.

### Install

```sh
npm i @nodedk/pojo
```

### Usage

```js
var pojo = require('@nodedk/pojo')

var data = {}

// Set - set data with dot notation
var result = pojo.set(data, 'a', 1)

// Get - get data with dot notation
var result = pojo.get(data, 'a')

// Pick - whitelist object values
var result = pojo.pick(data, 'a')

// Omit - blacklist object values
var result = pojo.omit(data, 'a')

// Clone - deep clone an object
var result = pojo.clone(data)

// Immutable set - combine clone with set
var { set, clone } = require('@nodedk/pojo')
var immutableResult = set(clone(data), 'a', 1)
```

Created by [Vidar Eldøy](https://eldoy.com)
