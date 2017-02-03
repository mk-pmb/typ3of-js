/*jslint indent: 2, maxlen: 80, continue: false, unparam: false */
/* -*- tab-width: 2 -*- */
/*global define: true, module: true, require: true */
((typeof define === 'function') && define.amd ? define : function (factory) {
  'use strict';
  var m = ((typeof module === 'object') && module), e = (m && m.exports);
  if (e) { m.exports = (factory(require, e, m) || m.exports); }
})(function () {
  'use strict';

  function nope() { return false; }

  function isFun(obj, mthd) {
    mthd = (obj && obj[mthd]);
    return (typeof mthd === 'function' ? mthd : nope);
  }

  var EX, obj2str = Object.prototype.toString, isArr = Array.isArray,
    isBuf = isFun(((typeof Buffer)[0] !== 'u') && Buffer, 'isBuffer');


  EX = function typ3of(x) {
    if (x === null) { return 'nul'; }
    var t = (typeof x).substr(0, 3);
    if (t === 'num') { return (x === +x ? t : String(x)); }
    if (t !== 'obj') { return t; }
    if (isArr(x)) { return 'arr'; }
    if (isBuf(x)) { return 'buf'; }
    t = obj2str.call(x).slice(8, -1);
    return (EX.nativeClassesMap[t] || 'obj');
  };

  EX.nativeClassesMap = {
    Array:    'arr',
    Date:     'dat',
    Object:   'obj',
    RegExp:   'rgx',
  };





  return EX;
});
