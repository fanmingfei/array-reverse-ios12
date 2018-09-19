// reference to the V8's test cases
// also see https://github.com/v8/v8/blob/master/test/mjsunit/array-reverse.js

QUnit.test('test primitive literal', function(assert) {
  assert.deepEqual([], [].reverse(), 'empty array');
  assert.deepEqual([8, 6, 4, 2], [2, 4, 6, 8].reverse(), 'array of int');
  assert.deepEqual(
    [0.8, 0.6, 0.4],
    [0.4, 0.6, 0.8].reverse(),
    'array of double'
  );
  assert.deepEqual(
    ['str4', 'str3', 'str2'],
    ['str2', 'str3', 'str4'].reverse(),
    'array of string'
  );
});

QUnit.test('test with holes', function(assert) {
  assert.deepEqual([4, 3, , 1], [1, , 3, 4].reverse());
  assert.deepEqual([4, , 2, 1], [1, 2, , 4].reverse());
  assert.deepEqual([5, , 3, , 1], [1, , 3, , 5].reverse());
});

QUnit.test('test with undefined', function(assert) {
  assert.deepEqual(
    [undefined, undefined, null, 1],
    [1, null, undefined, undefined].reverse()
  );
});

QUnit.test('test with array of Objects', function(assert) {
  assert.deepEqual(
    new Array(new Array(1), new Array(2), new Array()),
    new Array(new Array(), new Array(2), new Array(1)).reverse()
  );
  assert.deepEqual(
    new Array(new Object(), new Object(), new Object()),
    new Array(new Object(), new Object(), new Object()).reverse()
  );
  assert.deepEqual(
    new Array(new Object(1), new Object(0), new Object()),
    new Array(new Object(), new Object(0), new Object(1)).reverse()
  );
  assert.deepEqual(
    new Array(new Object('1'), new Object(0), Object.create(null)),
    new Array(Object.create(null), new Object(0), new Object('1')).reverse()
  );
  assert.deepEqual(
    new Array(new Number(1), new Number(2), new Number(3)),
    new Array(new Number(3), new Number(2), new Number(1)).reverse()
  );
  assert.deepEqual(
    new Array(new Boolean(false), new Boolean(true)),
    new Array(new Boolean(true), new Boolean(false)).reverse()
  );
});

QUnit.test('test with Object', function(assert) {
  let obj = { length: 5 };
  obj[0] = 'foo';
  obj[3] = 'bar';
  Array.prototype.reverse.call(obj);

  assert.deepEqual({ '1': 'bar', '4': 'foo', length: 5 }, obj);
});

QUnit.test('test with prototype chain', function(assert) {
  let proto = { 0: 'foo', 19: 'bar' };
  let obj = { length: 20, 5: 'foobar', __proto__: proto };
  Array.prototype.reverse.call(obj);

  assert.equal('bar', obj[0]);
  assert.equal('foobar', obj[14]);
  assert.equal('foo', obj[19]);
});
