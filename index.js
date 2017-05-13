'use strict';

var radium = module.exports;

// module information
radium.version = 'v' + require('./package.json').version;
radium.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of radium found. ' +
      'Please make sure to require radium and check that submodules do' +
      ' not also include their own radium dependency.';
    throw new Error(message);
  }
};
radium.versionGuard(global._radium);
global._radium = radium.version;

// crypto
radium.crypto = {};
radium.crypto.BN = require('./lib/crypto/bn');
radium.crypto.ECDSA = require('./lib/crypto/ecdsa');
radium.crypto.Hash = require('./lib/crypto/hash');
radium.crypto.Random = require('./lib/crypto/random');
radium.crypto.Point = require('./lib/crypto/point');
radium.crypto.Signature = require('./lib/crypto/signature');

// encoding
radium.encoding = {};
radium.encoding.Base58 = require('./lib/encoding/base58');
radium.encoding.Base58Check = require('./lib/encoding/base58check');
radium.encoding.BufferReader = require('./lib/encoding/bufferreader');
radium.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
radium.encoding.Varint = require('./lib/encoding/varint');

// utilities
radium.util = {};
radium.util.buffer = require('./lib/util/buffer');
radium.util.js = require('./lib/util/js');
radium.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
radium.errors = require('./lib/errors');

// main radium library
radium.Address = require('./lib/address');
radium.Block = require('./lib/block');
radium.MerkleBlock = require('./lib/block/merkleblock');
radium.BlockHeader = require('./lib/block/blockheader');
radium.HDPrivateKey = require('./lib/hdprivatekey.js');
radium.HDPublicKey = require('./lib/hdpublickey.js');
radium.Networks = require('./lib/networks');
radium.Opcode = require('./lib/opcode');
radium.PrivateKey = require('./lib/privatekey');
radium.PublicKey = require('./lib/publickey');
radium.Script = require('./lib/script');
radium.Transaction = require('./lib/transaction');
radium.URI = require('./lib/uri');
radium.Unit = require('./lib/unit');

// dependencies, subject to change
radium.deps = {};
radium.deps.bnjs = require('bn.js');
radium.deps.bs58 = require('bs58');
radium.deps.Buffer = Buffer;
radium.deps.elliptic = require('elliptic');
radium.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
radium.Transaction.sighash = require('./lib/transaction/sighash');
