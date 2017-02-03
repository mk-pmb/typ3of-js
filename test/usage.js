/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

require('usnam-pmb');

var ld = require('lodash');

function repeat(x, n) { return ld.times(n, ld.constant(x)); }


(function readmeDemo() {
  //#u
  var typ3of = require('typ3of'), same = require('assert').deepStrictEqual,
    hi = 'hello';

  function eql(values, types) { same(values.map(typ3of), types); }

  // trivial values
  eql([undefined, null,   true,   42,     'foo',  eql,    {}   ],
      ['und',     'nul',  'boo',  'num',  'str',  'fun',  'obj']);

  // what's a number?
  eql([0, -2, 3, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, +hi],
      repeat('num', 5).concat('NaN'));

  // objects
  eql([hi.split(),  [],     Buffer.from(hi),  /RegExp/g,  new Date()],
      ['arr',       'arr',  'buf',            'rgx',      'dat'     ]);
  //#r


  function e(t, v) {
    var r = typ3of(v);
    if (r === t) { return; }
    console.error({ actual: r, expected: t, value: v });
    throw new Error(r + ' !== ' + t);
  }

  function a(t, l) { l.forEach(function (v) { e(t, v); }); }

  a('boo', [ false ]);
  a('str', [ hi, 'world', '' ]);
  a('arr', [ hi.match(/l/g), [1, 2, 3], [] ]);
  a('fun', [ String, Function, Object ]);





}());









console.log("+OK test_usage test passed.");    //= "+OK test_usage test passed."
