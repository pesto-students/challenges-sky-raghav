import { deepEqual } from "./deepEqual";

describe('DeepEqual', () => {
  test('Checking for deep equality without comparing descriptors', ()=> {
    const obj = { a: 5 };
    const obj2 = {};
    Object.defineProperty(obj2, "a", { value: 5 });
    expect(deepEqual(obj, obj2)).toBe(true);
  });

  test('Checking for deep equality via comparing descriptors', ()=> {
    const obj = { a: 5 };
    const obj2 = {};

    expect(deepEqual(obj, obj2, { matchDescriptors: true })).toBe(false);
  });
});
