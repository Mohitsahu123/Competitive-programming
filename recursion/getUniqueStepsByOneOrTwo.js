function getUniqueStepsByOneOrTwo(n) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else {
    return getUniqueStepsByOneOrTwo(n - 1) + getUniqueStepsByOneOrTwo(n - 2);
  }
}

var a = console.log;
a(getUniqueStepsByOneOrTwo(4));
