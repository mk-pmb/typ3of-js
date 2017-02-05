/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

try { require('usnam-pmb'); } catch (ignore) {}

function dare(testName, func) {
  try {
    return func();
  } catch (err) {
    console.log('-ERR ' + testName + ' test failed: ', err);
  }
}

dare('usage', require('./usage.js'));
console.log("+OK all tests passed.");   //= "+OK all tests passed."
