/**
 * Copyright (C) 2019. Drew Gauderman
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * This file is used for testing and can be used as an example.
 */

//must setup environment variables to run this test
if (!process.env.USERNAME || !process.env.PASSWORD) {
  throw new Error('SETUP YOUR ENVIRONMENT VARIABLES');
}

//include the class
const Vitelity = require('../vitelity.js');

//start up the client
const vClient = new Vitelity({
  username: process.env.USERNAME,
  password: process.env.PASSWORD
});

//get all subaccounts example
vClient
  .call('subaccounts', {
    do: 'list'
  })
  .then(response => console.log('subaccounts:', response))
  .catch(err => console.log('ERROR:', err));

//get all available local numbers example
vClient
  .call('listlocal', {
    state: 'OR',
    ratecenter: 'Florence'
  })
  .then(response => console.log('subaccounts:', response))
  .catch(err => console.log('ERROR:', err));
