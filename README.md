# Vitelity Node API Module

This is an unofficial [Vitelity](https://vitelity.com)'s [API](https://apihelp.vitelity.net) Node client.

Test live at https://codesandbox.io/s/github/maddog986/node-vitelity

Please report any bugs using the [issue tracker](https://github.com/maddog986/node-whmcs/issues).

Positive feedback helps fuel development. This module is very simple yet effective for my business needs. PR requests are welcome!

### Installation

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

## Release Notes

[See Changelog](https://github.com/maddog986/node-vitelity/blob/master/CHANGELOG.md)

## License

MIT License

Copyright(c) 2019 Drew Gauderman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files(the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and / or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
