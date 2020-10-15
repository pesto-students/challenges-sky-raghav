function* count(start, step) {
  if (typeof start !== 'number') {
    throw new TypeError('start is not a number');
  }
  let initial = start;
  let isStepGiven = false;
  if (step) {
    if (typeof step === 'number') isStepGiven = true;
    else throw new TypeError('step is not a number');
  }
  while (true) {
    yield initial;
    if (isStepGiven) initial += step;
    else initial += 1;
  }
}

function* cycle(iterator, n) {
  let iteration = true;
  let isIterationGiven = false;
  if (n) {
    if (typeof n === 'number') {
      iteration = n;
      isIterationGiven = true;
    } else throw new TypeError('n is not a number');
  }
  while (iteration) {
    for (const value of iterator) {
      yield value;
    }
    if (isIterationGiven) iteration -= 1;
  }
}

function* repeat(value, n) {
  if (typeof value !== 'boolean' && typeof value !== 'number' && !value) {
    throw new Error(`Invalid value: ${value}`);
  }
  let iteration = true;
  let isIterationGiven = false;
  if (n) {
    if (typeof n === 'number') {
      iteration = n;
      isIterationGiven = true;
    } else throw new TypeError('n is not a number');
  }
  while (iteration) {
    yield value;
    if (isIterationGiven) iteration -= 1;
  }
}

export {
  count,
  cycle,
  repeat,
};
