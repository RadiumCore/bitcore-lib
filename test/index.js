'use strict';

var should = require('chai').should();
var radium = require('../');

describe('#versionGuard', function() {
  it('global._radium should be defined', function() {
    should.equal(global._radium, radium.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      radium.versionGuard('version');
    }).should.throw('More than one instance of radium');
  });
});
