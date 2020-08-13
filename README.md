# json-parse-default

> Parse JSON with default value

## Install

```
$ npm install json-parse-default
```

## Usage

```js
const jsonParse = require('json-prase-default');

const json = '{"enable": true}';

const jsonObj = jsonParse(json, null, {}, null);

```

## API

### jsonParse(string, reviver?, default?, onError?)

#### string

Type: `string`

#### reviver

Type: `Function`

Prescribes how the value originally produced by parsing is transformed, before being returned. See [`JSON.parse` docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter
) for more.

#### default

Type: `object`

When there is exception, this value will be return

#### onError

Type: `Function`

error callback function
---
