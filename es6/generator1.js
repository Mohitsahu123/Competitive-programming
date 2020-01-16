function * iterableObj() {
  yield 'This';
  yield 'is';
  yield 'iterable.'
}


for (const val of iterableObj()) {
  console.log(val);
}
