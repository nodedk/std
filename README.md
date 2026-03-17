# NodeDK Struct

The NodeDK Struct Library.

Javascript object manipulation. Supports dot-notation.

### Install

```sh
npm i @nodedk/struct
```

### Usage

```js
var struct = require('@nodedk/struct')

var data = {}

// Set - set data with dot notation
var result = struct.set(data, 'a', 1)

// Get - get data with dot notation
var result = struct.get(data, 'a')

// Pick - whitelist object values
var result = struct.pick(data, 'a')

// Omit - blacklist object values
var result = struct.omit(data, 'a')

// Clone - deep clone an object
var result = struct.clone(data)

// Immutable set - combine clone with set
var { set, clone } = require('@nodedk/struct')
var immutableResult = set(clone(data), 'a', 1)
```

Created by [Vidar Eldøy](https://eldoy.com)
