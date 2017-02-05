/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function repeat(x, n) {
  x = [x];
  while (x.length < n) { x = x.concat(x.slice(0, n - x.length)); }
  return x;
}


function checkSupported(f) { try { return f(); } catch (err) { return; } }


function readmeDemo() {
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
  eql([hi.split(),  [],     /RegExp/g,  new Date()],
      ['arr',       'arr',  'rgx',      'dat'     ]);

  if (checkSupported(function () { return Buffer.from; })) {
    eql([ Buffer.from(hi) ],
        [ 'buf'           ]);
  }
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




  console.log('+OK usage test passed');
}










(function (e) {
  /*global define: true */
  var d = ((typeof define === 'function') && define),
    m = ((typeof module === 'object') && module);
  if (d && d.amd) { d(function () { return e; }); }
  if (m && m.exports) { m.exports = e; }
}(readmeDemo));
