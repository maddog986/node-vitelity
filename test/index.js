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
