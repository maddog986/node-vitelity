/**
 * Copyright (C) 2019. Drew Gauderman
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

//requirements
const request = require('request'),
  xmlParser = require('xml2json');

//export the sonar class
module.exports = class Vitelity {
  //class startup
  constructor(opts) {
    //require host, username, password
    ['username', 'password'].forEach(name => {
      if (!opts.hasOwnProperty(name)) {
        throw new Error('options.' + name + ' is a required argument.');
      }
    });

    //base options
    this.opts = {
      host: 'api.vitelity.net/api.php',
      ...opts
    };
  }

  //request that returns a promise
  modem(opts) {
    let options = {
      uri: `https://${this.opts.host}`,
      method: opts.method || 'GET',
      qs: {
        login: this.opts.username,
        pass: this.opts.password,
        cmd: opts.cmd,
        xml: opts.xml || 'yes',
        ...opts
      }
    };

    return new Promise((res, rej) =>
      request(options, (e, r) => {
        if (e) return rej(e);

        try {
          const jsonBody = xmlParser.toJson(r.body, {
            object: true
          }).content;

          //capture error messages from Vitelity
          if (jsonBody.status === 'fail') {
            return rej(jsonBody.error);
          }

          //get main keys to figure out how to return the info
          const keys = Object.keys(jsonBody);

          //skips first "status" object and straight to the content.
          if (keys.length === 2) {
            const secondKeys = Object.keys(jsonBody[keys[1]]);

            //skips to the first row values
            if (secondKeys.length === 1) {
              return res(jsonBody[keys[1]][secondKeys[0]]);
            }

            //returns first row
            res(jsonBody[keys[1]]);
          }

          //return everything
          res(jsonBody);
        } catch (err) {
          rej(err);
        }
      })
    );
  }

  //get something
  call(cmd, opts = {}) {
    return this.modem({
      cmd: cmd,
      ...opts
    });
  }
};
