# Vitelity Node Module

This is an unofficial [Vitelity](https://vitelity.com)'s [API](https://apihelp.vitelity.net) Node client.

Test live at https://codesandbox.io/s/github/maddog986/node-vitelity

## Installation

```
npm install node-vitelity
```

## Usage

First you need to instantiate it.

```javascript
const Vitelity = require('../vitelity.js');

const vClient = new Vitelity({
  username: 'api username',
  password: 'api password'
});
```

Using the created client, call the methods you need, example:

```javascript
//get all subaccounts
vClient
  .call('subaccounts', { do: 'list' })
  .then(response => console.log('subaccounts:', response.subaccounts.subaccount))
  .catch(err => console.log('ERROR:', err));

//get all available local numbers
vClient
  .call('listlocal', { state: 'OR', ratecenter: 'Florence' })
  .then(response => console.log('subaccounts:', response.numbers.did))
  .catch(err => console.log('ERROR:', err));
```

## License

[See License](https://github.com/maddog986/node-vitelity/blob/master/LICENSE)

## Release Notes

[See Changelog](https://github.com/maddog986/node-vitelity/blob/master/CHANGELOG.md)
