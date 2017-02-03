
<!--#echo json="package.json" key="name" underline="=" -->
typ3of
======
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
A better typeof, all results are 3 characters long.
<!--/#echo -->


Usage
-----

from [test/usage.js](test/usage.js):

<!--#include file="test/usage.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="18" -->
```javascript
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
```
<!--/include-->



<!--#toc stop="scan" -->



Known issues
------------

* needs more/better tests and docs




License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
