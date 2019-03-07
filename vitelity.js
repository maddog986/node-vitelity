/**
 * Copyright (C) 2019. Drew Gauderman
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

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
      },
      json: true
    };

    //console.log(options);

    return new Promise((res, rej) => request(options, (e, r) => (e ? rej(e) : r.body.error ? rej(r.body.error) : res(xmlParser.toJson(r.body, { object: true }).content))));
  }

  //get something
  call(cmd, opts = {}) {
    return this.modem({
      cmd: cmd,
      ...opts
    });
  }
};
