#!/usr/bin/env node

var _ = require('lodash');
var program = require('commander');
var utils = require('./cli-utils');
program = utils.configureCommander(program);

// options, (isAdActive, isCurrentlyTesting)
program
  .usage('[options] [title]')
  .parse(process.argv);

var args = program.args;
var host = 'http://localhost:3232/bws/api/';

var clientArgs = {
  host
}

var title = args[0];

let adArgs = {
  title
};

utils.getClient(clientArgs, { 
  mustExist: true, 
  walletId: 'f48d485b-66f8-40d0-9db2-24fa0f707ea6'
}, function (client) {
  client.getAdvertisement(adArgs, (err, result) => {
    utils.die(err);
    if(!result) {
      console.log('Couldn\'t retrieve adverts');
    }
    else {
      console.log('Retreived adverts ', result);
    }
  });
});